import defaultGameImage from "../assets/default-game-image.jpg";

function getCroppedImageUrl(imageURL: string) {
  if (!imageURL) return defaultGameImage;
  const updatedUrl = imageURL.replace("/media/", "/media/crop/600/400/");
  return updatedUrl;
}

export default getCroppedImageUrl;
