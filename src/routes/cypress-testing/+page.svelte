<h1>Cypress Testing</h1>

<a href="https://github.com/stevekinney/cypress">Github Repo</a>
<a href="https://frontendmasters.com/courses/cypress">FEM Course</a>

<p>Cypress: Fast, easy, and reliable testing for anything that runs in the browser</p>

<p>
  Cypress can be installed with yarn/npm or HomeBrew. Yarn/Npm are preferred though because they pin a version in
  package.json
</p>

<p>To open the cypress testing ui: yarn run cypress open</p>

<p>Cypress uses assertions from Chai & Mocha</p>
<p>Cypress uses jQuery selectors</p>

<p>Cypress is framework agnostic</p>

<b>If you log something in a cypress test it will show up in the developer console</b>

<p>You can visit any web page and run tests on it with: cy.visit('url-here')</p>

<p>To Change the screensit in a test: cy.viewport()</p>

<p>Cypress takes the absense of failure as success</p>

<p>Avoid using styling selectors or component structure (get fourth p tag = no good)</p>

<p>The first step in Cypress testing is telling Cypress what page to visit</p>

<p>You can start by writing tests to describe the success conditions for the component you're writing</p>

<p>The two main selectors for Cypress are: cy.get() || cy.contains()</p>

<p>To get going you can start small and simple and as your tests get more involved you can delete the initial tests.</p>

<p>Cypress <i>WILL</i> rerun when you change your test files, but <i>WONT</i> run when you change your code files</p>

<p>cy.get('class').should('exist') and cy.get('.class') are equivalent</p>

<h3>Input Fields</h3>

<p>cy.get('selector').type('value') will instert the value in to the input</p>

<!-- <p>When creating a component you can create placeholder tests like so: describe('name',() => { it('should',() => {gf})})</p> -->

<h3>Aliases</h3>

<p>
  An alias is a variable where we can store a commonly used selector to reduce the number of times we repeat that given
  query.
</p>

<p>
  Consider which elements you will need to test and if it makes sense add them to the beforeEach AFTER the cy.visit to
  make them available to all tests
</p>

<p>Create an alias</p>
<p>cy.get('ul li').as('listItem')</p>
<p>Accessv the alias</p>
<p>cy.get('@listItem')</p>

<p>
  Interesting Note: You can set values to 'this', for example, 'this.varA = 1' and then access them in your tests. The
  caveat is that it doesn't work with arrow functions because the arrow functions are lexically scoped.
</p>

<p>For input tests store the type value in a variable to prevent mispellings</p>

<p>For select input type use cy.get('selectWrapper').selet('desired-option')</p>
<p>For checkbox/radios input type use cy.get('checkbox').check().should('be.checked')</p>

<p>Invoke() uses Jquery methods</p>
<p>
  For odd input types (such as range), use cy.get('range-slider').invoke('val').trigger("event type, input, change,
  etc")
</p>
<p>Val is a method that gets the current val you of the input</p>
<p>If you pass a second argument in to the invoke('val', "100") call val sets that as the initial value</p>

<h3>Generating Tests</h3>

<code>{'for(const property of properties) { it(`should have a column for ${property}`, () =>{})}'}</code>
<code>{'cy.get(`${id})'}</code>

<p>You can chain success criteria like cy.get('element').should('do this').and('do this also')</p>

<!-- 
Example

let ratings = [1,2,3,4,5];

Iterate through the array of ratings
for(const rating of ratings) {
  Create a text for each rating in the array. 
  Use template literals to pass in the rating dynamically
  it('should only display items with a rating of ${rating} or higher', () => {
    Get the rating dropdown element. 
    Invoke the 'val' method with the current rating to set the dropdown value to "rating"
    Update the UI elements by triggering a change event
    cy.get(@rating).invoke('val', rating).trigger('change');
    Get the popularity column and iterate through each row cell
    cy.get(td.popularity).each(($el) => {
      On each cell check it the elements text is greater than or equal to the rating
      The + sign coerces the text string to a number
      expect(+$el.text()).to.be.gte(rating);
    })
  })
}
 -->

<h3>Title & Location</h3>
<code>{'cy.title().should("contain", "IH")'}</code>

<p>With cy.location() you can query any thing that you would get using window.location</p>
<p>This includes</p>
<ul>
  <li><code>hash</code></li>
  <li><code>host</code></li>
  <li><code>hostName</code></li>
  <li><code>href</code></li>
  <li><code>origin</code></li>
  <li><code>pathname</code></li>
  <li><code>port</code></li>
  <li><code>protocol</code></li>
  <li><code>search</code></li>
  <li><code>toString</code></li>
</ul>

<h3>Form Validation</h3>
<p>To see if a input field is required you can get the pseudo class of "":invalid"</p>
<p>To check what type of error set the invalid pseudo class to true you can do</p>
<code>{'cy.get("[data-test="example"]:invalid").invoke("prop", "validationMessage").shoud(...)'}</code>
<p>You can also check the validity like so:</p>
<code>{'cy.get("[data-test="example"]:invalid").invoke("prop", "validity").its("valueMissing").should("be.true")'}</code
>

<p>Another way to add text to an input AND submit it without calling the submit function is the following</p>
<code>{'cy.get("@email").type("you@email.com{enter}")'}</code>

<a href="https://docs.cypress.io/api/commands/type#Arguments">Full list of Type key commands</a>

<h3>Tasks</h3>
<p>Cypress lets us define things that need to happen outside the browser in nodeJS</p>

<p>Your Tasks live in the plugins directory</p>
<p>This helps with user account mocking</p>
<code>{'beforeEach(() => { cy.task("reset") })'}</code>

<h3>Commands</h3>
<p>Commands allow you to batch common operations in to easy-to-use workflows</p>
<!-- 
  Cypress.Commands.add('signIn', (email, password) => {
    cy.get('email-field').type(user.email)
    cy.get('password-field').type(user.password)
    cy.get('submit-button').click()
  })

  Then use it in tests like

  cy.signIn({email: "example", password: "password"})
 -->

<p>This exists in the commands.js file</p>

<!-- 
Cypress.Commands.add('waitForApp', () => {
  return cy.wrap(
    new Promise((resolve) => {
      cy.window().then((win) => {
        win.addEventListener('sveltekit:start', resolve)
      })
    })
  )
})


beforeEach(() => {
  return cy.waitForApp()
})

  -->

<h3>Network Requests</h3>
<p>For situations where we do not control a given API or DB we can intercept the network request</p>
<p>These cases could be</p>
<ul>
  <li>Third Party APIs</li>
  <li>OAuth Logic via Google/Facebook</li>
  <li>Internal APIs</li>
</ul>

<p>To do a intercept in Cypress simply</p>
<code>{'cy.intercept({method: "GET", url: "/*"},[user:"Jimi", id: 1])'}</code>

<b>important: You can alias these stubbed requests</b>

<p>cy.wait(@api) will fail if the api is not called in time.</p>

<p>Cypress Studio</p>
<code>{'npx cypress open'}</code>
