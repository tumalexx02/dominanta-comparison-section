const comparisonBtns = document.querySelectorAll('.comparison__more-btn');


comparisonBtns.forEach(comparisonBtn => comparisonBtn.addEventListener('click', (e) => {
  const comparisonContent = e.target.parentNode.parentNode.parentNode.querySelector('.comparison__table-content');
  const localComparisonBtn = e.target;

  localComparisonBtn.classList.toggle('comparison__more-btn_active');
  comparisonContent.classList.toggle('comparison__table-content_hidden');
}))