import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import { emptyBooks, showBooks } from '../components/books';
import { showAuthors } from '../components/authors';
import navigationEvents from '../events/navigationEvents';
import { getBooks } from '../helpers/data/bookData';
import { getAuthors } from '../helpers/data/authorData';

const startApp = (userObject) => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(userObject.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // Put all books on the DOM
  getBooks(userObject.uid).then((booksArray) => {
    if (booksArray.length) {
      showBooks(booksArray);
    } else {
      emptyBooks();
    }
  });
  // createBook().then((books) => showBooks(books));
  getAuthors(userObject.uid).then((authors) => showAuthors(authors));
};

export default startApp;
