const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const navToggle = $(".nav-toggle");
const nav = $(".primary-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

$$(".primary-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

$("#current-year").textContent = new Date().getFullYear();

$$("[data-placeholder]").forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert(link.dataset.placeholder);
    }
  });
});

async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Unable to load ${path}`);
  return response.json();
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

async function renderProjects() {
  const target = $("#project-grid");
  try {
    const projects = await loadJSON("data/projects.json");
    target.innerHTML = projects.map(project => `
      <article class="project-card">
        <span class="status">${escapeHTML(project.status)}</span>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.summary)}</p>
        <ul>${project.topics.map(topic => `<li>${escapeHTML(topic)}</li>`).join("")}</ul>
        ${project.url ? `<a href="${escapeHTML(project.url)}" target="_blank" rel="noopener">Project details</a>` : ""}
      </article>
    `).join("");
  } catch (error) {
    target.innerHTML = `<p>Project data could not be loaded. Open the site through a local web server rather than directly from the file system.</p>`;
  }
}

async function renderPeople() {
  const target = $("#people-grid");
  try {
    const people = await loadJSON("data/people.json");
    target.innerHTML = people.map(person => `
      <article class="person-card" data-category="${escapeHTML(person.category)}">
        <div class="person-avatar">${escapeHTML(person.initials)}</div>
        <span class="role">${escapeHTML(person.role)}</span>
        <h3>${escapeHTML(person.name)}</h3>
        <p><strong>Research:</strong> ${escapeHTML(person.research)}</p>
        <p>${escapeHTML(person.bio)}</p>
        ${person.url ? `<a href="${escapeHTML(person.url)}" target="_blank" rel="noopener">Profile</a>` : ""}
      </article>
    `).join("");

    $$(".filter-button").forEach(button => {
      button.addEventListener("click", () => {
        $$(".filter-button").forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        const filter = button.dataset.peopleFilter;
        $$(".person-card").forEach(card => {
          card.hidden = filter !== "all" && card.dataset.category !== filter;
        });
      });
    });
  } catch (error) {
    target.innerHTML = `<p>People data could not be loaded.</p>`;
  }
}

async function renderPublications() {
  const target = $("#publication-list");
  try {
    const publications = await loadJSON("data/publications.json");
    target.innerHTML = publications.map(item => `
      <article class="publication-item">
        <div class="publication-year">${escapeHTML(item.year)}</div>
        <div>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.authors)}</p>
          <p><em>${escapeHTML(item.venue)}</em></p>
          ${item.url ? `<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener">Publication link</a>` : ""}
        </div>
      </article>
    `).join("");
  } catch (error) {
    target.innerHTML = `<p>Publication data could not be loaded.</p>`;
  }
}

async function renderFunding() {
  const target = $("#funding-table");
  try {
    const grants = await loadJSON("data/grants.json");
    target.innerHTML = grants.map(grant => `
      <tr>
        <td><strong>${escapeHTML(grant.project)}</strong></td>
        <td>${escapeHTML(grant.sponsor)}</td>
        <td>${escapeHTML(grant.period)}</td>
        <td>${escapeHTML(grant.role)}</td>
        <td>${escapeHTML(grant.students)}</td>
        <td>${escapeHTML(grant.support)}</td>
      </tr>
    `).join("");
  } catch (error) {
    target.innerHTML = `<tr><td colspan="6">Funding data could not be loaded.</td></tr>`;
  }
}

async function renderCourses() {
  const target = $("#course-grid");
  try {
    const courses = await loadJSON("data/courses.json");
    target.innerHTML = courses.map(course => `
      <article class="course-card">
        <span class="level">${escapeHTML(course.level)}</span>
        <div class="course-code">${escapeHTML(course.code)}</div>
        <h3>${escapeHTML(course.title)}</h3>
        <p>${escapeHTML(course.description)}</p>
      </article>
    `).join("");
  } catch (error) {
    target.innerHTML = `<p>Course data could not be loaded.</p>`;
  }
}

Promise.all([
  renderProjects(),
  renderPeople(),
  renderPublications(),
  renderFunding(),
  renderCourses()
]);
