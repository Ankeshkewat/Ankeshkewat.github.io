

<!-- Include the library. -->
<script src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js">
</script>

<!-- Optionally, include the theme (if you don't want to struggle to write the CSS) -->
<link rel="stylesheet" href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css" />

<!-- Prepare a container for your calendar. -->
<!-- <div class="calendar">
    Loading stuff
    Loading the data just for you.
</div> -->

<script>
  GitHubCalendar(".calendar", "Ankeshkewat");

  // or enable responsive functionality:
  GitHubCalendar(".calendar", "Ankeshkewat", { responsive: true });

  // Use a proxy
  GitHubCalendar(".calendar", "Ankeshkewat", {
    proxy(username) {
      return fetch(`https://your-proxy.com/github?user=${username}`)
    }
  }).then(r => r.text())
</script>