import selectAuthor from './selectAuthor';

const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#author-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="firstName">Author First Name</label>
        <input type="text" class="form-control" id="firstName" aria-describedby="bookTitle" placeholder="Enter First Name" required>
      </div>
      <div class="form-group">
       <label for="lastName">Author Last Name</label>
        <input type="text" class="form-control" id="lastName" aria-describedby="bookTitle" placeholder="Enter Last Name" required>
      </div>
      <div class="form-group">
      <label for="email">Author email address</label>
       <input type="text" class="form-control" id="authorEmail" aria-describedby="bookTitle" placeholder="Enter Author Email" required>
     </div>
     <div class="form-check">
     <input type="checkbox" class="form-check-input" id="favorite-author">
     <label class="form-check-label" for="favorite-author">Favorite Author?</label>
   </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;

  selectAuthor();
};

export default addAuthorForm;
