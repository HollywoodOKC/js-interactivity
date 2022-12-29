const message = document.querySelector('#message');

const addMovie = event => {
  event.preventDefault();

  const inputField = document.querySelector("input");
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener('click', deleteMovie);
  movie.appendChild(deleteBtn);
  movie.appendChild(movieTitle);
  inputField.value = "";

  const list = document.querySelector("ul");
  list.appendChild(movie);
}

document.querySelector("form").addEventListener('submit', addMovie);

const deleteMovie = event => {
  event.target.parentNode.remove();
  message.textContent = 'Deleted!';
  revealMessage();
}

const crossOffMovie = event => {
  event.target.classList.toggle('checked');

  if (event.target.classList.contains('checked') === true) {
    message.textContent = `${event.target.textContent} has been watched!`;
  } else {
    message.textContent = `${event.target.textContent} has been added back!`;
  }
  revealMessage();
}

const revealMessage = () => {
  message.classList.remove('hide');

  setTimeout(() => {
    message.classList.add('hide');
  }, 1000)
}
