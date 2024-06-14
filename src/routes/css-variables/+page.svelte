<h1>CSS-Variables</h1>
<a href="https://frontendmasters.com/courses/css-variables/">Frontend Masters: CSS-Variables</a>
<a href="https://fmasters--dynamic-css.netlify.app/">Course Slide Deck</a>

<p>The aim of creating custom CSS properties is to..</p>
<ul>
  <li>improve maintainability of our CSS</li>
  <li>create style hooks for custom components</li>
  <li>create transitions and animations not feasible without JS</li>
  <li>cleanly separate style and behavior</li>
</ul>

<p>CSS Variables are dynamically scoped and are scoped to an element</p>
<p>
  This means you can declare the same variable on multiple elements or classes and the value will be scoped to the
  selector. Meaning
</p>
<code>{'#a { --color: blue }'}</code>
<code>{'#b { --color: purple }'}</code>

Will result in
<p style="color: blue">Blue</p>
<p style="color: purple">Purple</p>

<p>CSS Variables can be declared in style tags or inline</p>
<code>{'<p style="--icon-color: red;">Should be red</p>'}</code>

<h1>What about :root?</h1>
<ul>
  <li><b>:root</b> = the root element. <code>{'<html>'}</code> in HTML, <code>{'<svg>'}</code> in SVG, etc</li>
  <li>In HTML, <b>:root = html</b> but with higher specificity</li>
  <li>It is just a convention, not a requirement</li>
</ul>

<p>To apply styles based on light / dark OS color preference use</p>
<code>{'@media (preferes-color-scheme: light OR dark)'}</code>
and
<code>{':root { color-scheme: light dark; }'}</code>

<h2>Aside</h2>
if<b>color-scheme</b> is specified with "light dark", then you can use "--canvas" and "--canvastext" and they will have
the following values
<br />
<p>IF dark mode is enabled</p>
<ul>
  <li><code>{'--canvas: white'}</code></li>
  <li><code>{'--canvastext: black'}</code></li>
</ul>
<p>IF light mode is enabled</p>
<ul>
  <li><code>{'--canvas: black'}</code></li>
  <li><code>{'--canvastext: white'}</code></li>
</ul>

<p>For simple implementations this is helpful</p>

<h2><b>@property</b> allows us to register our properties and control how they behave</h2>

<p>Currently we often set initial CSS values like</p>
<code>{'button { --color-initial: black; color: var(--color, var(--color-initial)) }'}</code>

<p>Then to change the color use</p>

<code>{'--color: red'}</code>

<p>This can be simplified with hidden CSS selectors</p>

<p>You can create initial color values that are "hidden" from the consumer which prevents a specificity war</p>
<p>The syntax is</p>
<code>{'--_color: var(--color, black)'}</code>
<p>Then we can use this color property like</p>
<code>{'border-bottom: var(--_color)'}</code>

<h1>Practical Applications</h1>
<ul>
  <li>We SHOULD discuss the change workflow for Svelte UI</li>
  <li>Should we have custom css properties in svelte UI to allow greater control over components?</li>
</ul>
