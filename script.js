const cimage = document.querySelector('.contact_dr_phone_img');
console.log(cimage);

// cimage.src = 'img/9.png';
setTimeout(() => {
  cimage.src = 'img/2.png';
  setTimeout(() => {
    cimage.src = 'img/3.png';
    setTimeout(() => {
      cimage.src = 'img/4.png';
      setTimeout(() => {
        cimage.src = 'img/5.png';
        setTimeout(() => {
          cimage.src = 'img/6.png';
          setTimeout(() => {
            cimage.src = 'img/7.png';
            setTimeout(() => {
              cimage.src = 'img/8.png';
              setTimeout(() => {
                cimage.src = 'img/9.png';
              }, 1200);
            }, 1200);
          }, 1200);
        }, 1200);
      }, 1200);
    }, 1200);
  }, 1200);
}, 1200);
setInterval(() => {
  setTimeout(() => {
    cimage.src = 'img/2.png';
    setTimeout(() => {
      cimage.src = 'img/3.png';
      setTimeout(() => {
        cimage.src = 'img/4.png';
        setTimeout(() => {
          cimage.src = 'img/5.png';
          setTimeout(() => {
            cimage.src = 'img/6.png';
            setTimeout(() => {
              cimage.src = 'img/7.png';
              setTimeout(() => {
                cimage.src = 'img/8.png';
                setTimeout(() => {
                  cimage.src = 'img/9.png';
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 11600);
