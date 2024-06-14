<h1>VSCode Can Do That?</h1>
<a href="https://burkeholland.gitbook.io/vs-code-can-do-that" id="vscode-can-do-that">VSCode Can Do That?</a>

<p>If there is a process already running on a port you want to use run: lsof -i tcp:3000</p>
<p>Then find the process ID and run: kill /forward carrot/ process-id /backwards carrot/</p>

<h3>Essential VSC Commands</h3>
<ul>
  <li>Toggle Sidebar: cmd + b</li>
  <li>Toggle Terminal: control + `</li>
  <li>Open Settings: cmd + ,</li>
  <li>Open Command Palette: cmd + shift + p</li>
  <li>Open File Switcher: cmd + p</li>
</ul>

<h1>Emmet Hacks</h1>
<h3>CSS</h3>
<p>Padding: 10px = <code>{'p10px'}</code></p>
<p>Color: #0 = <code>{'c#000'}</code></p>
<p>Line-height: #0 = <code>{'lh20px'}</code></p>

<p><b>Note:</b> You can create custom Emmet aliases</p>

<p />

<hr />

<ul>
  <li>
    div + tab = <div>New Div</div>
  </li>
  <li>
    div#main + tab =
    <div id="main">New Div with the ID main</div>
  </li>
  <li>
    div#main.app =
    <div id="main" class="app">New Div with the ID main with the class of app</div>
  </li>
  <li>
    #new.app = <div id="new" class="app">New Div with id "new" & class "app"</div>
  </li>
</ul>
<br />
ul>.list-item*3 =
<ul>
  <li class="list-item" />
  <li class="list-item" />
  <li class="list-item" />
</ul>

<p>Command: cmd + shift + up arrow selects the next element outward</p>
<p>Command: cmd + shift + down arrow selects the next element inward</p>

<p>
  Using the mouse cursor, hold <code>{'shift + option'}</code> and drag the cursor up or down to select multiple lines STARTING
  at the same character
</p>

<a class="newParent" id="wow">
  <p>
    Select desired element you want to wrap and open the command palette, type wrap, emmet will add the div around your
    selection
  </p>
</a>

<div class="parentDiv">
  <p>Command: option + shift + w to add a parent element</p>
  <p>Command: option + shift + q to rename element (and closing tag)</p>
</div>
<b>To get default image size: Command Palette => Emmet Update Image Size</b>
Works with remote images too

<h1>Moving, Duplicating, Deleting Commands</h1>
<ul>
  <li>Duplicate Line: Option + Shift Up/Down</li>
  <li>Move Line: Option + Up/Down</li>
  <li>Delete Line: cmd + shift + k</li>
</ul>

<h2>Fun Fact: You don't need to highlight the whole line in vscode to copy or cut it.</h2>

<p>To create custom foldable regions open them with //#region NAME_HERE, then end it with //#endregion</p>

//#region Example
<div class="example">
  <div>Test</div>
  <div>Test</div>
  <div>Test</div>
  <div>Test</div>
</div>
//#endregion

<p>To highlight all instances of a selection: cmd + shift + L</p>

<i>double check this</i>
<p>To skip highlights: cmd + d, then cmd + k to skip, then cmd + d</p>
<p>To unselect a selection: <code>{'cmd + u'}</code></p>

<p>To go to last opened file: cmd + p + p</p>

<p>In The command palette: @ shows sections, @: categorizes them</p>

<ul>
  <li>To focus in the sidebar: cmd + 0</li>
  <li>To focus back in the open file: cmd + 1</li>
</ul>

<p>To open a highlighted file: cmd + down</p>

<h1>Refactor: Replace var name with F2</h1>

<p>To enable ts checking in a file: //@ts-check</p>

<p>To Launch debugger: F5</p>

<p>Git Source control: Undo last commit.</p>

<h3>Markdown Tips</h3>

<p>Create an image in MD</p>
<code>{'![Alt Text]("path/to/file")'}</code>

<p>Ordered list syntax</p>
<ul>
  <li>1. first</li>
  <li>1. second</li>
  <li>1. third</li>
</ul>
<p>Will print as</p>
<ul>
  <li>1. first</li>
  <li>2. second</li>
  <li>3. third</li>
</ul>

<p>For key:value pairs you can use <code>{'<dl><dt>Title</dt><dd>Description</dd></dl>'}</code></p>

<dl>
  <dt>Testing</dt>
  <dd>One, Two</dd>
  <dt>Second Test</dt>
  <dd>Three, four</dd>
</dl>

<p>
  To create a collapsible wrap a <code>{'summary'}</code> tab inside a <code>{'details'}</code> tag. Then have any content
  for the collapsible nested within the details tag as well
</p>
<details>
  <summary>Testing collapsible</summary>

  Content here
</details>

<p>> carrots can be used to create block quotes</p>
<code>{'>'}</code>

<h1>Practical Applications</h1>
<ul>
  <li>Peacock config for different workspaces</li>
  <li>index.svelte isn't as good as name.svelte do to intellisense imports</li>
</ul>
