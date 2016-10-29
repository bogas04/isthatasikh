window.onload = () => {
  'use strict';
  const $app = document.querySelector('.wrapper');

  const [$image, $sikh, $asikh, $more, $question] = ['.image', '#sikh', '#asikh', '#more', '.question']
    .map(e => $app.querySelector(e));

  const newImage = () => parseInt(Math.random() * images.length);

  const isSikh = () => images[currentImage].isSikh;

  let currentImage;

  const updateImage = () => {
    currentImage = newImage();
    $image.src = images[currentImage].image;
  };

  const showResult = userSaysSikh => {
    $question.setAttribute('data-message', isSikh(currentImage) === userSaysSikh
      ? 'Correct answer!'
      : 'Wrong answer!'
    );
    currentImage = newImage();
  };

  updateImage();

  $sikh.onclick = () => showResult(true);
  $asikh.onclick = () => showResult(false);
  $more.onclick = () => { 
    $question.setAttribute('data-message', '');
    updateImage();
  };
};
