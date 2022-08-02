(function(){
  // mobile menu
  const menuToggle = document.querySelector('header .menu-toggle');
  const header = document.querySelector('header');
  menuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    header.classList.toggle('open');
  });

  // art form
  const form = document.querySelector('form#art-form');
  if (form) {
    const addFile = form.querySelector('button.add-another-file');
    const formError = form.querySelector('p.error');

    addFile.addEventListener('click', function(e) {
      e.preventDefault();
      let numFiles = form.querySelectorAll('input[type="file"]').length;
      if (numFiles < 5) {
        let input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('name', 'artwork_' + (numFiles + 1));
        input.setAttribute('placeholder', 'Upload Artwork');
        input.setAttribute('class', 'form-control');
        input.setAttribute('accept', 'image/*');
        form.querySelector('input[type="file"]').parentNode.appendChild(input);
      }
    });

    function validateImages(e) {
      let promises = [];

      let files = form.querySelectorAll('input[type="file"]');
      files.forEach(function(file) {
        if (file.files[0]) {
          let img = new Image();
          img.src = window.URL.createObjectURL(form.querySelector('input[type="file"]').files[0]);
          promises.push(new Promise(function(resolve, reject) {
            img.onload = function() {
              if (img.width >= 1024) {
                formError.innerText = 'Image too large';
                formError.style.display = 'block';
                reject(false);
              }
              else {
                resolve(true);
              }
            }
          }));
        }
      });

      return Promise.all(promises);
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      formError.style.display = 'none';

      validateImages().then(() => {
        let formData = new FormData();
        formData.append('name', form.querySelector('input[name="name"]').value);
        formData.append('email', form.querySelector('input[name="email"]').value);
        formData.append('message', form.querySelector('textarea[name="message"]').value);
        formData.append('country', form.querySelector('select[name="country"]').value);
        formData.append('website', form.querySelector('input[name="website"]').value);
        formData.append('website2', form.querySelector('input[name="website2"]').value);
        let files = form.querySelectorAll('input[type="file"]');
        files.forEach(function(file, i) {
          formData.append('artwork_' + (i + 1), file.files[0]);
        });
        axios.post(e.target.getAttribute('action'), formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': 'application/json'
            }
          })
          .then(function(resp) {
            document.querySelector('.wrapper .form').style.display = 'none';
            document.querySelector('.wrapper .success').style.display = 'block';
          });
      });
    });
  }

  // home page
  var carousel = document.querySelector('.carousel');
  if (carousel) {
    axios.get("https://store.coinkite.com/data/tap-cards")
      .then(function(resp) {    
        resp.data.cards.forEach(function(card) {
          let buyButton = '';
          if (card.currently_for_sale) {
            buyButton = `<a href="${card.sku_deeplink}" class="btn btn-orange"><i class="fa fa-cart-plus"></i> Buy Now</a>`; 
          }

          if (card.portrait_artwork) {
            carousel.innerHTML += `<div class="carousel__cells portriat_view">
                <a href="${card.product_website}">
                  <img src="${card.image}" alt="${card.sku}" />
                </a>
                <div class="bottom_black">
                  <div class="dis_flex">
                    <span class="title">${card.desc} - ${card.variant}</span>
                    
                    <span class="org_btn">${buyButton}</span>
                  </div>
                </div>
              </div>`;
          }else{
            carousel.innerHTML += `<div class="carousel__cells">
                <a href="${card.product_website}">
                  <img src="${card.image}" alt="${card.sku}" />
                </a>
                <div class="bottom_black">
                  <div class="dis_flex">
                    <span class="title">${card.desc} - ${card.variant}</span>
                    
                    <span class="org_btn">${buyButton}</span>
                  </div>
                </div>
              </div>`;
          }
        });

        var cells = carousel.querySelectorAll('.carousel__cell');
        var cellCount = cells.length;
        var selectedIndex = 0;
        var cellWidth = carousel.offsetWidth;
        var cellHeight = carousel.offsetHeight;
        var isHorizontal = true;
        var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        var radius, theta;

        function rotateCarousel() {
          var angle = theta * selectedIndex * -1;
          carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
            rotateFn + '(' + angle + 'deg)';
          // carousel.setAttribute('data-sel', selectedIndex);
          // get visible cells

          cells.forEach(function(cell, i) {
            let selIndex = selectedIndex % cellCount;
            if (selIndex < 0) selIndex += cellCount;

            if (i == selIndex) {
              cell.classList.add('sel');
            }
            else {
              cell.classList.remove('sel');
            }

            if (
              (i == selIndex) ||
              (i == selIndex + 1) ||
              (i == selIndex - 1) ||
              (selIndex == 0 && i == cellCount - 1) ||
              (selIndex == cellCount - 1 && i == 0)
            ) {
              cell.querySelector('img').classList.add('vis');
            }
            else {
              cell.querySelector('img').classList.remove('vis');
            }
          });
        }

        var prevButton = document.querySelector('.previous-button');
        prevButton.addEventListener( 'click', function() {
          selectedIndex--;
          rotateCarousel();
        });

        var nextButton = document.querySelector('.next-button');
        nextButton.addEventListener( 'click', function() {
          selectedIndex++;
          rotateCarousel();
        });

        function changeCarousel() {
          // cellCount = cellsRange.value;
          theta = 360 / cellCount;
          var cellSize = isHorizontal ? cellWidth : cellHeight;
          radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
          for ( var i=0; i < cells.length; i++ ) {
            var cell = cells[i];
            if ( i < cellCount ) {
              // visible cell
              cell.style.opacity = 1;
              var cellAngle = theta * i;
              cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
            } else {
              // hidden cell
              cell.style.opacity = 0;
              cell.style.transform = 'none';
            }
          }

          rotateCarousel();
        }

        // set initials
        changeCarousel();

        cells.forEach(function(cell) {
          cell.querySelector('a:first-child').addEventListener('click', function(e) {
            if (!e.target.parentNode.parentNode.classList.contains("sel")) {
              e.preventDefault();
              let newPos = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
              let selPos = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(document.querySelector('.carousel__cell.sel'));
              let difference = newPos - selPos;
              if (difference < 0) difference = cellCount + difference;

              if (difference <= (cellCount / 2)) {
                selectedIndex = selectedIndex + difference;
              }
              else {
                selectedIndex = selectedIndex - (cellCount - difference);
              }
              
              rotateCarousel();
            }
          });
        });
    });
  }
})();
