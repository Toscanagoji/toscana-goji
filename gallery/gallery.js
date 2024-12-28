const galleryContainer = document.getElementById('gallery-images');
const imagesDir = '../images/gallery'; // replace with your folder path

// Use the fetch API to get a list of files in the directory
fetch(`${imagesDir}/`)
  .then(response => response.text())
  .then(html => {
    // Parse the HTML to get a list of image files
    const imageFiles = Array.from(html.matchAll(/<a href="([^"]+\.jpg|png|gif)"/g)).map(match => match[1]);

    // Create img elements for each image file
    imageFiles.forEach((imageFile) => {
      const img = document.createElement('img');
      img.src = `${imageFile}`;
      img.alt = imageFile;
      galleryContainer.appendChild(img);
    });
  });
/*
// Assuming you're using a modern browser that supports async/await
async function loadImages() {
  const files = await fetch(folderPath)
    .then(response => response.arrayBuffer())
    .then(buffer => new Uint8Array(buffer));

  files.forEach((file) => {
    const img = document.createElement('img');
    img.src = `${folderPath}/${file.name}`;
    img.alt = file.name;
    galleryContainer.appendChild(img);
  });
}

loadImages();*/