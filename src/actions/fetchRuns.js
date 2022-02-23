//action creator is a function

export function fetchRuns(){
  fetch('http://localhost:3000/api/v1/runs')
  .then(response => response.json())
  .then(data => console.log(data))
}

//dispatch action object to reducer which will update state