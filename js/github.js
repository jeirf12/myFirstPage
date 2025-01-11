export const loadRepositorys = async () => {
  const dataRepository = await fetch(urlApiGithub(USERNAME))
    .then(response => response.json())
    .then(response => response);

  for (const repository of dataRepository) {
    createElementRepository(
      createModelRepository(repository)
    );
  }
};

const USERNAME = 'jeirf12';

const urlApiGithub = (username) => `https://api.github.com/users/${username}/repos`;

const createElementRepository = (repository) => {
  const figure = createFigure(repository);
  figure.appendChild(createImagen());
  figure.appendChild(createSpan(repository));
  figure.appendChild(createFigCaption(repository));
  portfolio.appendChild(figure);
}

const createModelRepository = (repository) => {
  return {
    'name': repository.name,
    'url': repository.clone_url,
    'description': repository.description,
  };
}

const createFigure = (repository) => {
  const figure = document.createElement('figure');
  figure.title = "Abrir Repositorio " + repository.name;
  figure.onclick = () => window.open(repository.url, '_blank');
  return figure;
}

const createImagen = () => {
  const img = document.createElement('img');
  img.src = "images/github.png";
  return img;
}

const createSpan = (repository) => {
  const span = document.createElement('span');
  !repository.description && (span.style.textAlign = 'center');
  span.textContent = repository.description ?? 'No tiene descripción';
  return span;
}

const createFigCaption = (repository) => {
  const figCaption = document.createElement('figcaption');
  figCaption.textContent = repository.name;
  return figCaption;
}

const portfolio = document.querySelector('.portfolio-repository');
