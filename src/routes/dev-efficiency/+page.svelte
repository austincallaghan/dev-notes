<h1>Developer Efficiency</h1>
<a href="https://frontendmasters.com/courses/developer-productivity/">FEM Link</a>

<h3 id="tmux">TMUX</h3>

<p>To start using tmux: Run tmux in terminal</p>

That command checks IF there is a server running, if there isn't a server running it starts one.
<br />
It then creates a new <i>session</i>, with a new <i>window</i>, with a new <i>pane</i>.
<br />

<p>To exit tmux: control + D</p>

Running C-d sends a "end of file note", this tells tmux "this pane cane be closed", tmux checks if there are other open
panes, if not, it closes the window, if there are no other windows open the session gets closed.

<p>To kill everything: tmux kill-server</p>

<p>List the active sessions: tmux list-sessions</p>

<p>
  On a new Terminal the following command connects to an existing tmux server you've created: tmux a (or) tmux attach
</p>

<h3>The Prefix Key: C-b</h3>

<p>When you use the C-b command tmux listens for your next key entry</p>
<p>The prefix key puts tmux in command mode</p>

<br />

Lesson commands are in this format: C-* where C = Control and * = Any key
<br />
