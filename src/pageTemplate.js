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
                <div class="card">
                    <div class="card-header">
                        <h2></h2>
                    </div>
                    <div class="card-body">
                        <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h2></h2>
                    </div>
                    <div class="card-body">
                        <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </body>
        
    </html>
  `;
};

module.exports = { pageTemplate };
