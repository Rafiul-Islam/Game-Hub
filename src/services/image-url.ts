function getCroppedImageUrl(imageURL: string) {
  const updatedUrl = imageURL.replace("/media/", "/media/crop/600/400/");
  return updatedUrl;
}

export default getCroppedImageUrl;
