const url =
  "https://api.unsplash.com/photos/random?client_id=JA64Clx91B9c55lZlEwa782nZ9XQXKOrCleEwym5FU0&count=4";

fetchRandomPhoto = async () => {
  const response = await fetch(url);

  const data = await response.json();

  data.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.urls.regular;
    console.log(data);
    document.body.appendChild(img);
  });
};
fetchRandomPhoto();
