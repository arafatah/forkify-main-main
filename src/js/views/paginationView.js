import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generatePlusMarkup(curPage) {
    return `
        <button class="btn--inline pagination__btn--next" data-goto="${
          curPage + 1
        }">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
  }

  _generateMinusMarkup(curPage) {
    return ` 
        <button class="btn--inline pagination__btn--prev" data-goto="${
          curPage - 1
        }">
            <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
        </button>`;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    // Logic: total result <length> / how much per page shown.
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    ); // 8 / 10 = 0.8 = 1 page

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generatePlusMarkup(curPage);
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMinusMarkup(curPage);
    }
    // Other page
    if (curPage < numPages) {
      return (
        this._generateMinusMarkup(curPage) +
        this._generatePlusMarkup(curPage)
      );
    }

    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
