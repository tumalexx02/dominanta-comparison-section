const comparisonBtns = document.querySelectorAll('.comparison__more-btn');
const tableContainer = document.querySelector('.comparison__table-container');
const shade = document.querySelector('.comparison__table-shade');
const theadElementsCount = document.querySelectorAll('.comparison__table thead td').length;

if (theadElementsCount > 5) {
  tableContainer.style.overflowX = 'scroll';
} else {
  tableContainer.style.overflowX = 'auto';
}

comparisonBtns.forEach(comparisonBtn => comparisonBtn.addEventListener('click', (e) => {
  const comparisonContent = e.target.parentNode.parentNode.parentNode.querySelector('.comparison__table-content');
  const localComparisonBtn = e.target;

  // console.log(theadElementsCount)
  localComparisonBtn.classList.toggle('comparison__more-btn_active');
  comparisonContent.classList.toggle('comparison__table-content_hidden');
}))

tableContainer.addEventListener('scroll', () => {
  const scrollLeft = tableContainer.scrollLeft;
  
  if (scrollLeft > 0) {
    shade.classList.add('comparison__table-shade_hidden');
  } else if (scrollLeft === 0) {
    shade.classList.remove('comparison__table-shade_hidden');
  }
})

