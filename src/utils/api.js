// Pets API
const api = "http://localhost:3001";


// Returns all cat data from API
function _getCats() {
  return new Promise((res, rej) => {
    fetch(`${api}/cats`)
      .then(res => res.json())
      .then(
        (result) => {
          res(result);
        },
        (error) => {
          rej(error);
        }
      )

  })
}

// Returns all dog data from API
function _getDogs() {
  return new Promise((res, rej) => {
    fetch(`${api}/dogs`)
      .then(res => res.json())
      .then(
        (result) => {
          res(result)
        },
        (error) => {
          rej(error)
        }
      )

  })
}

// resolve cats & dogs and returns when loaded
export function getInitialData() {
  return Promise.all([
    _getCats(),
    _getDogs(),
  ]).then(([cats, dogs]) => ({
    cats,
    dogs,
  }))
}
