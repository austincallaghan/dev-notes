<h1>React + Storybook</h1>

<a href="https://frontendmasters.com/courses/design-systems">Frontend Masters: Design Systems</a>
<a href="https://github.com/emmabostian/fem-design-systems">Repo</a>
<a href="https://fem-design-systems.netlify.app/">Course Website</a>
<a
  href="https://www.canva.com/design/DAD2ReY78JQ/9PwrO5lswW_tB4o4ZEbA2Q/view?utm_content=DAD2ReY78JQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
  >Slides</a
>
Table of Contents
<ul>
  <li>Design Systems</li>
  <li>Design</li>
  <li>Figma</li>
  <li>Styled Components</li>
  <li>Animation</li>
  <li>Storybook</li>
  <li>Tools & Resources</li>
</ul>

<h2>Why do design systems matter?</h2>

<h3>Accessibility, Consistency, and Trickle-down updates, Responsiveness, Onboarding, Flexibility, Speed</h3>
<p>Everyone, regardless of circumstance, should be able to achieve the same results from your application</p>

<p>Design systems ensure color contrast, type scale and zoom is accessible and consistent</p>

<h2>Draw backs</h2>
<ul>
  <li>Time to develop</li>
  <li>Maintenance</li>
  <li>Investment</li>
</ul>

Example of the importance of design systems
<a href="https://medium.com/eightshapes-llc/and-you-thought-buttons-were-easy-26eb5b5c1871">Button Article</a>

<h2>Three pillars of design systmes</h2>

<h3>Design Language</h3>
The set of standards and assets which guide the creation of a suite of products underneath a brand.
<br />
<h3>Component Library</h3>
<p>Set of components which turn the design language and UI Kit into living, breathing code</p>
<br />
<h3>Style Guide</h3>
<p>The documentation for the design language, UI Kit, and component library.</p>

<h1>Design Checklist (or Audit)</h1>
<ul>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Accessibility</h2>
      <p>Can all users, regardless of circumstance, use this component?</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Interaction</h2>
      <p>How should a component respond when a user interacts with it?</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Context</h2>
      <p>How and where should this component be used?</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Complietion</h2>
      <p>Are all states, including nuetral, hover, focus, and disabled, defined?</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Content</h2>
      <p>What type of content does this component rely upon?</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Customization</h2>
      <p>Are aspects of this component customizable? If so, how?</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Screen Resolution</h2>
      <p>How does this component look on varying screen resolutions?</p>
    </div>
  </li>
</ul>

<h1>Development Checklist</h1>
<ul>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Accessibility</h2>
      <p>Can all users, regardless of circumstance, use this component?</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Responsiveness</h2>
      <p>Our components must respond to browser window resizing and varying screen resolutions.</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Completion</h2>
      <p>Does this component account for all aspects of the design.</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Customization</h2>
      <p>Have we implemented all of the cusomizable aspects of this component?</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Error Handling/Prop Validation</h2>
      <p>How do our components respond when something breaks?</p>
    </div>
  </li>
  <li>
    <div style="display: flex; flex-direction: column">
      <h2>Browser Compatibility</h2>
      <p>Do the technologies we use work across all supported browsers or must we include polyfills?</p>
    </div>
  </li>
</ul>

<h2>"Users are willing to wait longer if they think something is happening"</h2>

<h1>Practical applications</h1>
<ul>
  <li>Should The stories file be in the component folder?</li>
  <li>Spectacle Mac Window Snapping</li>
  <li>
    Is there any reason box-sizing: border-box is not set on the theme component? It's leading to unnecessary style bugs
  </li>
  <li>Add Icon Button</li>
  <li>Investigate: Has IH Design specified the desired font sizes of elements (h1, p, etc) anywhere?</li>
  <li>
    Have we discussed Rem units instead of px. The argument FOR rem over px is that if a user has a visual impairment
    they can set the base font size and our text will accommadate that base size
  </li>
  <li>What are our current Design principles?</li>
  <li>
    UI Audit: Compile all components, in every variation and state, in one place. Group these by functionality. Start
    with the components that are easily achievable and have the highest value add.
  </li>
</ul>

<a href="https://coolers.co">Color Picker</a>
