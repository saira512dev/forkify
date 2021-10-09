import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = btn.dataset.goto;
      handler(goToPage);
    });
  }

  // _renderPaginationButtons(currentPage, type) {
  //   //return `${type === 'next' ? currentPage + 1 : currentPage - 1}`;
  //   return `<button data-goto ="${
  //     type == 'next' ? currentPage + 1 : currentPage - 1
  //   }
  //      class="btn--inline pagination__btn--${type == 'next' ? 'next' : 'prev'}">
  //     ${type == 'next' ? '<span>Page' + `${currentPage + 1}` + '</span>' : ''}
  //     <svg class="search__icon">
  //       <use href="${icons}#icon-arrow-${type == 'next' ? 'right' : 'left'}">
  //   </use>
  //     </svg>
  //     ${type == 'prev' ? '<span>Page' + `${currentPage - 1}` + '</span> ' : ''}
  //   </button> `;
  // }

  _renderNextButton(currentPage) {
    return `<button data-goto ="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button> `;
  }

  _renderPreviousButton(currentPage) {
    return `<button data-goto ="${
      currentPage - 1
    }"  class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${currentPage - 1}</span>
  </button>
   `;
  }

  _generateMarkup() {
    const currentPage = Number(this._data.page);
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //const type1 = 'next';

    //page 1 and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return this._renderNextButton(currentPage);
    }

    //there are other pages
    if (currentPage < numPages) {
      return (
        this._renderNextButton(currentPage) +
        this._renderPreviousButton(currentPage)
      );
    }

    //Last page
    if (currentPage === numPages && numPages > 1) {
      return this._renderPreviousButton(currentPage);
    }

    //page 1 and there is no other page
    return '';
  }
}

export default new PaginationView();
