document.addEventListener("DOMContentLoaded", () => { //event, e, should be passed here?
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target; //this should be currentTarget?
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });


  

  // adding SF places as list items

  // --- your code here!

  const ul = document.getElementById("sf-places");

  const addList = (e) => {
    e.preventDefault();
    // const text = Element.getElementsByClassName("favorite-input");
    const text = document.querySelector(".favorite-input") //must be css selector
    const value = text.value;
    // text.val('');
    text.value = "";

    const li = document.createElement("li");
    li.textContent = value; //textContent?
    ul.append(li); //appendChild?

  //   // ul.append(text);

  };

  document.querySelector(".favorite-submit").addEventListener("click", addList);




  // adding new photos

  // --- your code here!

  // <button type="button" class="photo-show-button">Toggle new photo form</button>

  // <div class="photo-form-container hidden">
  //   <form>
  //     <input type="text" class="photo-url-input" placeholder="image URL"/>
  //     <input type="submit" class="photo-url-submit" value="Add photo"/>
  //   </form>
  // </div>

  // <ul class="dog-photos">
  //   <li><img src="http://i.imgur.com/T26TiZ1.jpg"/></li>
  //   <li><img src="http://www.golden-retriever.com/wp-content/uploads/2015/06/cute-golden-retriever-happy-puppies.jpg"/></li>
  //   <li><img src="https://s-media-cache-ak0.pinimg.com/564x/fd/b6/c0/fdb6c0bc1ee189e926f965b616b49cb1.jpg"/></li>
  // </ul>


  const revealForm = (e) => {
    e.preventDefault();
    
    const form_container = document.querySelector(".photo-form-container");
    // form_container.toggleClass("hidden");
    if (form_container.className === "photo-form-container") {
      form_container.className = "photo-form-container hidden";
    } else if (form_container.className === "photo-form-container hidden") {
      form_container.className = "photo-form-container";
    };

  };

  const addPhoto = (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    const img = document.createElement("img");
    const url = document.querySelector(".photo-url-input");
    img.src = url.value;
    li.append(img);

    const ul = document.querySelector(".dog-photos");
    ul.append(li);

    url.value = "";
  }

  document.querySelector(".photo-show-button").addEventListener("click", revealForm);
  document.querySelector(".photo-url-submit").addEventListener("click", addPhoto);

});