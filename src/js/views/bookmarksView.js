import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {

  constructor() {
    super();
    this._closeWindow();
    this._openWindow();
    this._clickHamburger()
    this.setParentElement();
  }
  checkifSmallScreen(){
    console.log("KKKK")
    if(document.body.clientWidth <= 600) {return true};
    return false
  }


    _parentElement = this.checkifSmallScreen() ? document.querySelector('.bookmarks__list-small') : document.querySelector('.bookmarks__list');

  _btnCloseArr = document.querySelectorAll('.btn--close-bookmarks');
  _btnOpenArr = document.querySelectorAll('.nav__btn--bookmarks')
  _btnHamburger = document.querySelector('.hamburger-menu_btn')
  _menuHamburger = document.querySelector('.hamburger-menu_items')
 // _btnBookmarksSmall = document.querySelector('.nav__btn--bookmarks-small')

 setParentElement(){
  this._parentElement = this.checkifSmallScreen() ? document.querySelector('.bookmarks__list-small') : document.querySelector('.bookmarks__list');
 }

freshen(){
  let content = document.querySelector('.bookmarks__list-small').innerHTML 
    document.querySelector('.bookmarks__list-small').innerHTML = content;
    let content2 = document.querySelector('.bookmarks__list').innerHTML  
    document.querySelector('.bookmarks__list').innerHTML = content2;
}
  toggleWindow(btn) {
    this.setParentElement()

    
   // this.freshen();
    this.nearestBookmark(btn).classList.toggle('hidden');
    console.log(this.nearestBookmark(btn))
   // this._parentElement = this.nearestBookmark(btn).children[1];
    this._generateMarkup()

      console.log(this._parentElement)
      console.log(this.checkifSmallScreen())
     



  }

  hideWindow(btn){
    btn.closest('.bookmarks').classList.toggle('hidden')
   // this._parentElement = this.checkifSmallScreen() ? document.querySelector('.bookmarks__list-small') : document.querySelector('.bookmarks__list');
  // this.freshen();
   
  //this._generateMarkup()
  this.setParentElement()


  }

  nearestBookmark(buttonName){
   return  buttonName.nextElementSibling;

  }

  toggleHamburgerMenu() {
   // location.reload();

    console.log("hai")
    this._menuHamburger.classList.toggle('hide')  ;
    this.setParentElement()

  }

  _clickHamburger(){
    this.setParentElement()

    this._btnHamburger.addEventListener('click',this.toggleHamburgerMenu.bind(this));
  }

  _openWindow(){
    this.setParentElement()

    this._btnOpenArr.forEach(btn => {
      btn.addEventListener('click', this.toggleWindow.bind(this,btn))
    })
  }

  _closeWindow(){
    this._btnCloseArr.forEach(btn => {
      btn.addEventListener('click', this.hideWindow.bind(this,btn))
    })
    this.setParentElement()
    

  }

  _errorMessage = 'No bookmarks yet.Find a recipe and bookmark it ;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    //console.log(this._data)
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
