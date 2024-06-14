<script>
  import LinkList from '$lib/components/LinkList/index.svelte';
  import List from '$lib/components/List/List.svelte';
  import ListItem from '$lib/components/List/ListItem.svelte';

  let courseResources = [
    {
      label: 'Frontend Masters: Web Performance',
      href: 'https://frontendmasters.com/courses/web-perf',
    },
    {
      label: 'Course Slides',
      href: 'https://docs.google.com/presentation/d/1GfEtDtaAQIv_VOggdmfNfJrf4Y2qQVkvt9zmvvwq8dw/edit#slide=id.gb7915dc0b8_0_1360',
    },
  ];

  let tableOfContents = [
    { label: 'Part 1: Understanding', href: '#understanding' },
    { label: 'Part 2: Improving', href: '#improving' },
    { label: 'Part 3: Planning', href: '#planning' },
  ];
</script>

<h1>Web Performance</h1>

<LinkList label="Course Resources" links={courseResources} />

<LinkList label="Table of Contents" links={tableOfContents} />

<h3 id="understanding">Part 1: Understanding</h3>

<p>Psychology of Performance</p>

<p>Measuring Performance</p>

<p>Interpreting performance data</p>

<p>Why is performance important?</p>

<p>Every 1s improvement = Up to 2% increase in CVR.</p>

<p>
  CVR stands for conversion rate or conversion ratio. Conversions can happen when a customer completes a task, makes a
  purchase, subscribes to a service or does any other action that the company counts as a conversion.
</p>

<p>100ms improvement = Up to 1% incremental revenue</p>

<p>(according to Walmart)</p>

<p>Correlation != Causation.</p>

<p>Claims of direct performance to conversion ratios should be taken with a grain of salt</p>

<p>Reason #1: Google says Performance is important. Google ranks you on performance scores.</p>

<p>Reason #2: Angry and frustrated users don't stick around long.</p>

<p>Exercise 1: What feels fast</p>

<a href="https://docs.google.com/spreadsheets/d/12r7-eW92R7bifidkaUd5Zu_46q2gDYULav0qcnntFxY/edit?usp=sharing"
  >https://docs.google.com/spreadsheets/d/12r7-eW92R7bifidkaUd5Zu_46q2gDYULav0qcnntFxY/edit?usp=sharing</a
>

<p>Wait time feels subjective.</p>

<p>Perceived Performance.</p>
<List>
  <ListItem
    >Rule #1: People want to start their activity. If we give them a way to start they will feel like the wait is
    longer.
  </ListItem>

  <ListItem
    >Rule #2: "Bored Time" feels slower. If the user has nothing to do and nothing to look at they feel like the wait is
    longer</ListItem
  >

  <ListItem
    >Rule #3: Anxious time waits feel slower. High stress wait feels longer because you're worried about it.</ListItem
  >

  <ListItem>Rule: #4: Unexplained waits feel slower</ListItem>

  <ListItem
    >Rule: #5: Uncertain waits feel slower. When you don't know how long you will be waiting feels slower</ListItem
  >

  <ListItem>Rule: #6: People will wait for value.</ListItem>
</List>

<h4>Measuring Web Performance.</h4>
<p>How do we convert these perceived waits in to actual metrics?</p>
<p>The Old Way = Page Load.</p>
<p>Performance was measuring by page load duration</p>
<p>The new way: Web Vitals</p>

<h3 id="improving">Part 2: Improving</h3>
<h3 id="planning">Part 3: Planning</h3>
