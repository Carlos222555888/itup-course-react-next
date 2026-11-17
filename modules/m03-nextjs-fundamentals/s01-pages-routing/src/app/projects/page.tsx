// list a few sample portfolio projects (title + short
// description each).
// Make sure each page returns unique, meaningful content - this is what proves the routing
// is working.
export default function Projects() {
  return (
    <section>
      <h1>My Projects</h1>
      <ul>
        <li>
          <h2>Project One</h2>
          <p>A web application that allows users to track their tasks efficiently.</p>
        </li>
        <li>
          <h2>Project Two</h2>
          <p>An e-commerce platform with a seamless shopping experience.</p>
        </li>
        <li>
          <h2>Project Three</h2>
          <p>A social media app that connects people with similar interests.</p>
        </li>
      </ul>
    </section>
  );
}