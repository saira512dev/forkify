import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {

  constructor() {
    super();
    this._closeWindow();
    this._openWindow();
    this._clickHamburger()
  }
  // checkifSmallScreen = function(){
  //   console.log("KKKK")
  //   if(document.body.clientWidth > 600) return false;
  //   return true
  // }

  _parentElement = document.querySelector('.bookmarks__list');
  _bookmarks = document.querySelector('.bookmarks');
  _btnClose = document.querySelector('.btn--close-bookmarks');
  _btnOpen = document.querySelector('.nav__btn--bookmarks')
  _btnHamburger = document.querySelector('.hamburger-menu_btn')
  _menuHamburger = document.querySelector('.hamburger-menu_items')



  // if(checkifSmallScree) {
  //   _parentElement = document.querySelectorAll('.bookmarks__list');
  // } 

  toggleWindow() {
    //this._bookmarks.style.visibility == 'hidden' ? this._bookmarks.style.visibility ='visible' : this._bookmarks.style.visibility = 'hidden';
    this._bookmarks.classList.toggle('hidden')  ;
  }

  toggleHamburgerMenu() {
    console.log("hai")
    this._menuHamburger.classList.toggle('hide')  ;

  }

  _clickHamburger(){
    this._btnHamburger.addEventListener('click',this.toggleHamburgerMenu.bind(this));
  }

  _openWindow(){
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this))
  }

  _closeWindow(){
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this))
  }

  _errorMessage = 'No bookmarks yet.Find a recipe and bookmark it ;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    console.log(this._data)
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
