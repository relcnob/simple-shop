export function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1a3RsdWh5dHV5ZGFneWhkZWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjIsImV4cCI6MTk4MjE3NDcyMn0.5GSiG58gHUjpsufQ9p4kyJFgI5ZvUW9zFiVwJrn_Wjw";
  const url = "https://suktluhytuydagyhdect.supabase.co";
  fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1a3RsdWh5dHV5ZGFneWhkZWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjIsImV4cCI6MTk4MjE3NDcyMn0.5GSiG58gHUjpsufQ9p4kyJFgI5ZvUW9zFiVwJrn_Wjw",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1a3RsdWh5dHV5ZGFneWhkZWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjIsImV4cCI6MTk4MjE3NDcyMn0.5GSiG58gHUjpsufQ9p4kyJFgI5ZvUW9zFiVwJrn_Wjw",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(payload),
  })
    .then()
    .then();
}

// fetch('https://suktluhytuydagyhdect.supabase.co/rest/v1/tvshows', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
