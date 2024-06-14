<script>
  import LinkList from '$lib/components/LinkList/index.svelte';
  import List from '$lib/components/List/List.svelte';
  import ListItem from '$lib/components/List/ListItem.svelte';

  let dropdownChanged = false;
  let toggleDropdown = () => (dropdownChanged = !dropdownChanged);

  let courseResources = [
    { label: 'Frontend Masters: Accessibility', href: 'https://frontendmasters.com/courses/javascript-accessibility/' },
    { label: 'Course Website', href: 'https://marcysutton.github.io/js-a11y-workshop/' },
  ];

  let tableOfContents = [
    { label: 'Introduction', href: '#introduction' },
    { label: 'Debugging Accessibility', href: '#debugging' },
    { label: 'Auditing Accessibility', href: '#auditing' },
    { label: 'Focus Management', href: '#focus-management' },
  ];
</script>

<h1>Accessibility in Javascript Applications</h1>

<LinkList label="Course Resources" links={courseResources} />

<LinkList label="Table of Contents" links={tableOfContents} />
<br />
<hr />

<div>
  <h3 id="introduction">Introduction</h3>

  <p>Q: What is accessiblity?</p>
  <p>A: Accessibilty is making the web more inclusive <i> <b>with</b> and <b>for</b> </i> people with disabilities</p>

  <b>Accessibility tools:</b>
  <List>
    <ListItem>axe extention</ListItem>
    <ListItem>Accessibility Insights</ListItem>
  </List>

  <h3 id="debugging">Debugging Accessiblity</h3>

  #A11y Debugging
  <ul>
    <li>Render in a web browser</li>
    <li>Test controls with the keyboard (Interactive things should be interactive, buttons, a tag, inputs)</li>
    <li>Use accessibility web extentions</li>
    <li>check color contrast</li>
    <li>test with screen readers</li>
    <li>Use magnification & zoom</li>
  </ul>

  <h3 id="auditing">Auditing</h3>

  Outlines are important and shouldn't be disabled a tags are anchors, they are meant to navigate a use. Github has
  great accessibility features, i.e "skip to content" pop up when focusing the GH logo, arrow keys to navigate through
  menus, escape to return to the previously focused element Take away: Skip to content

  <h3>Hidden vs. Visible CSS</h3>

  "visually-hidden" is a utility class, sometimes called "sr-only" (screen-reader-only). Renders an html element so it
  is part of the documents information, but is visually hidden. Pulled out of the flow of the document This is valueable
  for spans that have screen reader text in them, headings used for semantic purposes
  <br />
  <br />
  "opacity" 0 hides the element visually, but the element still is in the document flow and reserves it's space This is useful
  for animation because you can not fade in an element using display or visibility. When they switch values from hiding an
  element to showing it the change is immediate whereas opacity can gradually reveal an element and be used with transitions
  or animations
  <br />
  <br />
  "displayNone" hides and element from assistive technology and removes the element from the document flo This is useful
  for parts of your UI that are currently inactive or not reachable by the user. It prevents the screen reader from delivering
  an inaccurate representation of the page flow.
  <br />
  <br />
  "visibility" reserves the space in the flow BUT hides the accessibility information
  <br />
  <br />

  Semantic markup and CSS styles impact the accessibility tree To view: DevTools -> Accessibility

  <h3>Focus testing haxx</h3>
  <h3>Paste into browser devTools console</h3>
  <!--   document.body.addEventListener('focusin', (event) => {
         console.log(document.activeElement)
       }) -->

  <pre><code>
    
      {'document.body.addEventListener("focusin", (event) => { console.log(document.activeElement) }) '}
    </code></pre>

  This function will log to the console the actively focused element, helpful for finding tab stops OR extra tabs

  <h1 id="focus-management">Focus Management</h1>

  <i>Moving the user's fucos as part of an interaction to alert them to new content</i>

  <ul>
    <li>Reachable & operable elements</li>
    <li>TAB, escape & arrow keys to navigate</li>
    <li>Visible focus elemenets</li>
    <li>Hidden/inert content</li>
  </ul>

  <h3>tabindex</h3>
  tabindex="0" makes an element focusable
  <br />
  <br />
  tabindex="-1" removes an element from the tab flow
  <br />
  <br />

  Tab index should be used with the role attribute and the name attribute Roles are not custom, there is a standard set

  <h1>Aria: Accessible Rich Internet Applications</h1>
  <ul>
    <li><b>role:</b> what is it?</li>
    <li><b>state:</b> what's happening to it?</li>
    <li><b>property:</b> what's the nature of it?</li>
  </ul>

  Aria isn't necessay if you are using semantic naming and structuring patterns. It can add value (namely, roles and
  labels), but it is an add on.

  <br />

  <h1>Handling Background content</h1>
  <ul>
    <li>aria-hidden="true" & tabindex="-1"</li>
    <li>inert(+polyfill)</li>
    <li>CSS display: none</li>
  </ul>

  Aria-hidden strips the accessibility information from the element and all children elements. Tabindex should be used
  with it because even though the accessibility infoormation is stripped, the interactable elements will still recieve
  focus.
  <br />
  <br />
  These tools are useful for handling dropdowns, menus, modals and loading screens.

  <a href="https://w3c.github.io/aria-practices/">Aria keyboard patterns</a>

  <h1>Navigation vs. Action</h1>
  Links (a tags) navigate while button elements do actions
  <br /><br />
  :focus:not(.focus-visible) can be used to disable the outline for mouse users while leaving the default focus-visible styles
  for keyboard users

  <h1>Accessible Dropdown</h1>
  For the initially displayed dropdown label, add `aria-haspopup="true"` to tell the screen reader that there is other content
  associated with this element
  <br /><br />
  Use aria-controls to associate an initiator element with the controlled elements. So on the button element that gets clicked
  to show a dropdown list, add this field to connect it to the responding list of items. For example:
  <button on:click={toggleDropdown} aria-haspopup="true" aria-controls="dropdown1">Open Dropdown</button>
  <ul id="dropdown1">
    <li>Li 1</li>
  </ul>

  Sending focus to wrapper elements can be confusing, instead add tabindex="-1" to remove the elememt from recieving
  focus so that the first element in the dropddown list recieves the focus

  <h2>Skip Link</h2>
  A skip link is a n a tag that navigates a user to a different portion of the page to show content.
  <br /><br />

  A skip link is a wrapper of the heading and applies a style and focus to the heading. This allows a user to click an a
  tag, be navigated to a corresponding page and show focus on the heading with the target id.

  <h1>TODO: Create skip link</h1>

  <h3>ARIA Announcements</h3>
  Announcements impact assistive technology. There are two levels, one will interupt the screen reader, the other will wait
  until the reader pauses.
  <div role="status">Status: polite announcement will wait until the screen reader finishes to announce the change</div>
  <div role="alert">Alert: Interupts screen reader to share the change now</div>
  <br />
  <b>OR</b>
  <br />
  <div aria-live="polite">Polite</div>
  <div aria-live="assertive">Assertive</div>

  Usually they are visually hidden

  <h1>Semantic HTML</h1>
  <ul>
    <li>Use headings & landmarks</li>
    <li>Start with native UI controls</li>
    <li>Verify assistive technology output</li>
  </ul>

  Main, nav, header, footer are all landmark elements.
  <br />
  <br />
  Semantic HTML communicates what's on a page to users of assistive technology, reader modes, conversational UIs, search
  engines, and more
  <br /><br />

  <h1>Unobtrusive motion</h1>
  prefers-reduced-motion CSS attribute is an operating system level preference we can use to remove or modify CSS animations

  <h1>Progressive enhancement</h1>
  Emphasize core web page content first, then add layers of presentation and features on top as browsers/network connections
  allow.
  <br /><br />
  HTML only with svelte? What happens if someone has JS disabled?
  <br />

  <h1>Testing</h1>
  <ul>
    <li>linting</li>
    <li>unit tests</li>
    <li>integration/end-to-end</li>
    <li>accessibility test APIs</li>
    <li>continuous integration</li>
    <li>manual & user testing</li>
  </ul>

  <h3>Linting</h3>
  Testing for quality line in a file or on a commit: eslint-plugin-jsx-a11y
  <br />
  This plugin checks the validity of accessibility attributes.
  <a href="https://www.gatsbyjs.com/docs/conceptual/making-your-site-accessible/#linting-with-eslint-jsx-plugin-a11y"
    >Setup Suggestions</a
  >
  <br />

  <h3>Unit Test Approach</h3>
  <ul>
    <li>Test code in isolation</li>
    <li>Stub inputs/fixture data</li>
    <li>Often headless (jsdom)</li>
    <li>Fast changing of state</li>
  </ul>

  <h3>Accessibility Unit Tests</h3>
  <ul>
    <li>Component-specific behavior: Showing/opening other elements</li>
    <li>Interaction/focus apis: Can every button be reached?</li>
    <li>Text alternatives</li>
    <li>ARIA states</li>
  </ul>

  The important thing to test is the outcome, the out put html.
  <br /><br />
  Testing dependencies should be devDependencies.

  <b>Article:</b>
  <a href="https://www.deque.com/blog/writing-automated-tests-accessibility/">
    Writing Automated tests for Accessibility</a
  >

  <br /><br />
  Use data-testids to have handles for testing. Data-testids get removed in production.

  <!-- domNodeInQuestion.focus() -->
  <!-- expect().toHaveFocus() -->
  <br />
  Swapping out focusable elements for non focusable elements is a great way to confirm your test is passing correctly.

  <h3>Integration / End-to-end tests</h3>
  <ul>
    <li>Real-world browser testing</li>
    <li>Document/page-level rules</li>
    <li>Widget interrop</li>
    <li>Color contrast</li>
    <li>Framework flexibility</li>
  </ul>

  ///<reference types="Cypress" />
  The previous line give syou auto complete for cypress API

  <h1>No matter what kind of test: focus on the outcome, not the code implementation</h1>

  <h3>axe-core or cypress-axe for testing accessibility with Cypress</h3>
  <br />
  Tests can catch roughly 30-50% of accessibility issues, depending on the rule set

  <br /><br />
  <i>👉 Screen readers can’t be automated</i>

  <h1>Practical Application</h1>
  <ul>
    <li>
      Test Customer Website, LAD & Profile for screen reader compatability, color contrast, and general accessibility
    </li>
    <li>Use arrow keys to navigate around menus instead of having to hit tab a million times</li>
    <li>
      Convert elements that have recieved a tabindex="0" property to buttons where ever possible. If that is not
      possible add an aria-label & role to improve accessibility
    </li>
    <li>HTML only with svelte? What happens if someone has JS disabled?</li>
    <li>Add aria-haspopup="true" to ProfileMenu & Header components</li>
    <li>Allow user to escape dropdowns with esc key on key up</li>
    <li>Investigate whether Cypress-Axe would be helpful with testing accessibility</li>
    <li>Add role="list" to uls so assistive technology calls out that it is a list AND the length of the list</li>
    <li>
      When a user opens the modal from the keybourd by pressing enter, send focus to either the call to action OR the
      close icon
    </li>
    <li>
      Can <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">eslint-plugin-jsx-a11y</a> be useful in PLS Refresh
    </li>
  </ul>
</div>

<style lang="postcss">
  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .opacity {
    opacity: 0;
  }
  .displayNone {
    display: none;
  }
  .visibility {
    visibility: hidden;
  }

  :focus:not(.focus-visible) {
    outline: 0;
  }
  :focus-visible {
    outline: 3px solid blue;
  }

  @media (prefers-reduced-motion: reduce) {
    .animation {
      animation: none;
      transition: none;
    }
  }
</style>
