const Key = "JA64Clx91B9c55lZlEwa782nZ9XQXKOrCleEwym5FU0";

async function fetchImages() {
  const query = document.getElementById("searchInput").value;
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${Key}&per_page=4`;

  const response = await fetch(url);
  const data = await response.json();

  const container = document.getElementById("imageContainer");
  container.innerHTML = "";

  data.results.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.urls.regular;
    img.alt = photo.alt_description || query;
    img.classList.add("image");
    container.appendChild(img);
  });
}