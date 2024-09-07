let currentIndex = 0;
const projectsPerPage = 3;
let projectsData = [];

// Fetch the JSON data
fetch('project.json')
    .then(response => response.json())
    .then(data => {
        projectsData = data.projects;
        displayProjects();
    });

function displayProjects() {
    const container = document.getElementById('projects-container');
    const projects = projectsData.slice(currentIndex, currentIndex + projectsPerPage);
    projects.forEach((project, index) => { // Add index parameter
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        // Set data-index attribute to the index of the project
        card.setAttribute('data-index', currentIndex + index);
        card.innerHTML = `
            <div class="card h-100">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <button type="button" class="btn btn-primary">View More</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    currentIndex += projectsPerPage;
    if (currentIndex >= projectsData.length) {
        document.getElementById('viewMoreBtn').style.display = 'none';
    }
}

function openProjectModal(project) {
    const modalTitle = document.getElementById('projectModalLabel');
    const modalBody = document.getElementById('projectModalBody');
    if (!modalTitle || !modalBody) {
        console.error('Modal elements not found.');
        return;
    }
    modalTitle.textContent = project.title || 'No Title';
    modalBody.innerHTML = `
        <p><strong>Description:</strong> ${project.description || 'No description available.'}</p>
        <p><strong>Technologies:</strong> Frontend: ${project.technologies.frontend.join(', ') || 'No frontend technologies'}, Backend: ${project.technologies.backend.join(', ') || 'No backend technologies'}, Database: ${project.technologies.database || 'No database'}, Auth: ${project.technologies.auth || 'No auth'}, Deployment: ${project.technologies.deployment.join(', ') || 'No deployment technologies'}</p>
        <p><strong>Problem:</strong> ${project.problem || 'No problem description'}</p>
        <p><strong>Solution:</strong> ${project.solution || 'No solution description'}</p>
        <p><strong>Features:</strong> ${project.features.join(', ') || 'No features listed'}</p>
        <p><strong>Outcome:</strong> ${project.outcome || 'No outcome description'}</p>
        <a href="${project.repo || '#'}" class="btn btn-primary" target="_blank">View Repository</a>
    `;
    $('#projectModal').modal('show');
}

document.getElementById('projects-container').addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-primary')) {
        const projectIndex = event.target.closest('.col-md-4').getAttribute('data-index');
        openProjectModal(projectsData[projectIndex]);
    }
});

document.getElementById('viewMoreBtn').addEventListener('click', displayProjects);
