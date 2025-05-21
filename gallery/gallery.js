const galleryContainer = document.getElementById("gallery-images");
const imagesDir = "images/gallery/"; // replace with your folder path

const imagesNames = [
  "1.jpeg",
  "2.jpg",
  "3.webp",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.webp",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg",
  "30.jpg",
  "31.jpg",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "36.jpg",
  "37.jpg",
  "38.jpg",
  "39.jpg",
  "40.jpg",
  "41.jpg",
  "42.jpg",
];

imagesNames.forEach((imageSrc) => {
  const img = document.createElement("img");
  img.src = imagesDir + imageSrc;
  console.log(img.src);
  img.alt = "Gallery image"; //TODO: rename each image with a meaningful name, trim the file extension from the imageSrc and use it as alt
  galleryContainer.appendChild(img);
});
