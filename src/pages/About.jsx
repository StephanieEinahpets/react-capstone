import "../styles/pages/about.scss"

export default function About() {
  return (
    <div className="about-page">
      <h1>About This Project</h1>

      <section>
        <h2>Capstone Development Process</h2>
        <p>
          This capstone project was built using modern frontend development
          practices, starting from initial wireframing to a fully interactive
          e-commerce app. All product data was sourced from the{" "}
          <a
            href="https://fakestoreapi.com/"
            target="_blank"
            rel="noopener noreferrer">
            Fake Store API
          </a>
          , which provided the opportunity to work with real-world API endpoints
          for fetching product listings, categories, and detailed information.
        </p>
        <p>
          The build process began with structuring React components, ensuring
          that state management was handled appropriately using hooks like
          useState and useEffect. API calls were implemented to populate the
          store with live data, and conditional rendering was applied so the UI
          could respond to user actions.
        </p>
        <p>
          Styling was done with SCSS, allowing for nested selectors, variables,
          and breakpoints that kept the layout consistent across different
          screen sizes.
        </p>
      </section>

      <section>
        <h2>Challenges & Solutions</h2>
        <p>
          Designing an e-commerce experience without a background in design
          required constant iteration. To improve visual appeal, significant
          time was spent visiting other online stores to analyze layout and
          styling. A key challenge was ensuring that the product grid aligned
          with the navigation while maintaining spacing that worked on both
          large and small viewports. By applying CSS Grid and flexbox, the
          interface adapted to multiple resolutions without losing readability.
          Adjustments to padding, margins, and media queries helped achieve a
          polished look while preventing images from overflowing their
          containers.
        </p>
        <p>
          Another hurdle was integrating category filters with checkboxes.
          Because the filtering logic depended on user input, controlled
          components were implemented to ensure that every checkbox reflected
          the correct state. This allowed multiple filters to work together
          without breaking the product list display.
        </p>
      </section>

      <section>
        <h2>Favorite Languages & Tools</h2>
        <p>
          JavaScript remains a favorite due to its flexibility and ability to
          handle both data manipulation and DOM updates seamlessly. I also like
          the specificity in the syntax that makes what you're doing much more
          clear. It also can be used for front and back end, which I think is
          more feasible than using multiple languages for each.
        </p>
        <p>
          SCSS was new to me and I like how it makes CSS more maintainable.
          Features like nesting, variables, and mixins allowed for a cleaner,
          DRY approach to styling, which was nice to have as the project grew in
          complexity.
        </p>
        <p>
          Finally, JSX offers the advantage of blending HTML-like syntax with
          JavaScript logic, enabling components to be self-contained and
          reusable, which reduces code duplication and improves readability.
        </p>
      </section>
    </div>
  )
}
