document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');
  const documentHeight = document.documentElement.clientHeight;

  function replaceSrcOnDataSrc() {
    const bool = true;
    for (let i = 0, length = images.length; i < length; i++) {
      const currentImg = images[i];
      const currentImgYCoord = getYCoord(currentImg);

      if (imageIntoView(currentImgYCoord)) continue;

      currentImg.setAttribute('data-src', currentImg.src);
      currentImg.removeAttribute('src');
    }
  }

  function setSrc() {
    for (let i = 0, length = images.length; i < length; i++) {
      const currentImg = images[i];
      const currentImgYCoord = getYCoord(currentImg);

      if (currentImg.hasAttribute('src')) continue;

      if (imageIntoView(currentImgYCoord)) {
        currentImg.src = currentImg.dataset.src;
      }
    }
  }

  function getYCoord(elem) {
    return elem.getBoundingClientRect().top;
  }

  function imageIntoView(y) {
    return y <= documentHeight;
  }

  replaceSrcOnDataSrc();

  window.addEventListener('scroll', function () {
    setSrc();
  });
});
