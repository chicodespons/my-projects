import { MediaItemClient, MediaItem } from "./MediaItem";

export const MediaItemWrapper = ({ item }: { item: MediaItem }) => {
  // Pre-translate all the text strings that will be needed
  const titleText = item.title ? item.title : "";
  const projectImageText = "Image";
  const closeText = "Close";
  const browserNotSupportVideoText = "No support for video in browser";

  // Pass the translated strings to the client component instead of the function
  return (
    <MediaItemClient
      item={item}
      titleText={titleText}
      projectImageText={projectImageText}
      closeText={closeText}
      browserNotSupportVideoText={browserNotSupportVideoText}
    />
  );
};
