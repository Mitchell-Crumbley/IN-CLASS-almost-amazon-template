const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="button-container" style="text-align: center;">
      <div id="add-button" style="display:inline-block;"></div>
      <div id="author-button" style="display:inline-block;"></div>
    </div>
    <div id="form-container"></div>
    <div id="store"></div>
  </div>`;
};

export default domBuilder;
