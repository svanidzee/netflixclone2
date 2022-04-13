// Next.js uses the App component to initialize pages. You can override it and control the page initialization

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
// Component - prop is the active page, so whenever you navigate between routes, Component will change to the new page
// pageProps -  is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object

export default MyApp;
