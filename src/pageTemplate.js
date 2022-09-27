const pageTemplate = (teamArray) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <title>Checkout The Team</title>
  </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
      <div class="card-container">
      ${teamArray.map(
        ({ typeChoice, name, id, email, officeNumber, github, school }) => {
          return `      
          <div class="card">
            <div class="card-header">
              <h2>${name}</h2>
              <h3>${typeChoice}</h3>
            </div>
            <div class="card-body">
              <ul>
                <li>ID:${id}</li>
                <li>Email:<a href="mailto:${email}">${email}</a></li>
                <li>Office Number:${officeNumber}</li>
                <li>GitHub:<a href="https://github.com/${github}">${github}</a>
                <li>${school}</li>
              </ul>
            </div>
          </div>
      `;
        }
      )}
  `;
};

module.exports = { pageTemplate };
