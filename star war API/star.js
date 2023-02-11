fetch(`https://swapi.dev/api/people/`)
  .then(res => {
    return res.json();
  })
.then(data => {
    console.log(data);
});