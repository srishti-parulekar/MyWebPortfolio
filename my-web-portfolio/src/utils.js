export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };
  // it takes the relative path that is passed to it, and the base url of the website, appending 
  //the relative path on to it, and then passing it back. 