import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import('../DATA.json').then(({default: jsonData}) => {
  console.log(jsonData)
  let datas = jsonData['restaurants']
  let dataList = '';
  datas.forEach(function(data) {
    dataList +=`
    <article class="post-item">
      <img class="post-item_thumbnail"
        src="${data['pictureId']}"
        alt="Gambar suasana restoran yang berada di ${data['city']}" 
      />
      <div class="city">${data['city']}</div>
      <div class="post-item_content">
        <p class="post-item_date">
          Rating: <a href="#" class="post-item_date_author">${data['rating']}</a>
        </p>
        <h1 class="post-item_title"><a href="#">${data['name']}</a></h1>
        <p class="post-item_description">${data['description'].slice(0, 150)}...</p>
      </div>
    </article>
    `;
  });
  document.querySelector('#posts').innerHTML = dataList;
});

let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('menu-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});