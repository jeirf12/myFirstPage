const loadRepositorys = async () => {
  const datos = await fetch("https://api.github.com/users/jeirf12/repos").then(respuesta => respuesta.json()).then(respuesta => respuesta);
  let portafolio = document.querySelector(".Portafolio-Images");
  for (let repo of datos) {
    let figure = document.createElement("figure");
    figure.title = "Abrir Repositorio " + repo.name;
    figure.onclick = () => window.open(repo.clone_url, "_blank");
    let img = document.createElement("img");
    img.src = "images/github.png";
    let figCaption = document.createElement("figcaption");
    figCaption.textContent = repo.name;
    figure.appendChild(img);
    let span = document.createElement("span");
    !repo.description && (span.style.textAlign = "center");
    span.textContent = repo.description ?? "No tiene descripción";
    figure.appendChild(span);
    figure.appendChild(figCaption);
    portafolio.appendChild(figure);
  }
};

export { loadRepositorys }
