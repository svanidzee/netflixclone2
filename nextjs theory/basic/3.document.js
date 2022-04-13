// A custom Document can update the <html> and <body> tags used to render a Page
// This file is only rendered on the server, so event handlers like onClick cannot be used in _document

// <Html>, <Head />, <Main /> and <NextScript /> are required for the page to be properly rendered
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* Head component used in _document is not the same as next/head 
is common for all pages. For all other cases, such as <title> tags
recommended use next/head in your pages or components */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Do not add application logic here or custom CSS
