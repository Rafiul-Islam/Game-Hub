function getCroppedImageUrl(imageURL: string) {
  if (!imageURL) return "";
  const updatedUrl = imageURL.replace("/media/", "/media/crop/600/400/");
  return updatedUrl;
}

export default getCroppedImageUrl;
