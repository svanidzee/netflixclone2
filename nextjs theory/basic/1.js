// By default, Next.js pre-renders every page. This means that Next.js generates HTML for each
// page in advance(წინასწარ), instead of having it all done by client-side JavaScript
// Pre-rendering can result in better performance and SEO.

// Each generated HTML is associated with minimal JavaScript code necessary for that page
// When a page is loaded by the browser, its JavaScript code runs and makes the
// page fully interactive. (This process is called hydration.)

// Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering
// The difference is in when it generates the HTML for a page

// 1.Static Generation(Recommended): HTML is generated at build time(when run next build) and will be reused on each request
// 2.Server-side Rendering: The HTML is generated on each request at server

// Static Generation is better over Server-side Rendering for performance reasons
// Statically generated pages can be cached by CDN with no extra configuration to
// boost performance. However, in some cases, Server-side Rendering might be the only option
