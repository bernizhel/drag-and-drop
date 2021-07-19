(function() {
  document.body.classList.remove('css-transitions-only-after-page-load');
})();


const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dragDrop);
});


function dragStart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragEnd(event) {
  event.target.classList.remove('hold');
  event.target.classList.remove('hide');
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  findCorrespondingTitle(event.target).classList.add('hovered');
}

function dragLeave(event) {
  findCorrespondingTitle(event.target).classList.remove('hovered');
}

function dragDrop(event) {
  event.target.appendChild(item);
  findCorrespondingTitle(event.target).classList.remove('hovered');
}

const titles = document.getElementById('titles');

function findCorrespondingTitle(placeholder) {
  for (let i = 0; i < placeholders.length; i++) {
    if (placeholders[i] === placeholder) {
      return titles.children[i]
    }
  }
}
