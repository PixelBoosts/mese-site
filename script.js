const container = document.getElementById('galerie');

for (let i = 1; i <= 28; i++) {
  const link = document.createElement('a');
  link.href = `images/masa-sticla${i}.jpg`;
  link.setAttribute("data-lightbox", "galerie");
  link.setAttribute("data-title", `Masă din sticlă ${i}`);

  const img = document.createElement('img');
  img.src = `images/masa-sticla${i}.jpg`;
  img.alt = `masă din sticlă ${i}`;
  img.className = "w-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300";

  link.appendChild(img);
  container.appendChild(link);
}
