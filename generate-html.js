
const fs = require("fs");
const path = require("path");

const dirs = fs.readdirSync("./builds", { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .filter((item) => !item.name.startsWith("."))
    .map((item) => {
        const basedir = path.join(__dirname, "builds");
        const time = fs.statSync(path.join(basedir, item.name)).mtime.getTime();
        const jsonPath = path.join(basedir, item.name, "index.json");
        const context = fs.existsSync(jsonPath) ? require("./" + item.name + "/index.json") : {};
        const { reportCreatedOn, failed, succeededWithWarnings  } = context;
        const testState = failed > 0 ? "danger" : succeededWithWarnings > 0 ? "attention" : "success";

        let date =  new Date();
        
        if (reportCreatedOn) {
            date = new Date(`${reportCreatedOn.split("-")[0].replace(/\./g, "-")}T${reportCreatedOn.split("-")[1].replace(/\./g, ":")}.000Z`);
        }

        return { item, time, date, testState };
    })
    .sort((left, right) => right.date.getTime() - left.date.getTime() );

const html = `<!doctype html>
<html lang="en" data-color-mode="light" data-dark-theme="light">
    <head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://unpkg.com/@primer/css@^19.0.0/dist/primer.css"/>
    </head>
    <body>

        <div class="container-xl px-md-6 pt-12">
            <div class="Subhead">
                <h2 class="Subhead-heading">Test Reports</h2>
            </div>

            ${dirs.map(({ item, time, date, testState }) => `
                <p>
                    <a class="no-underline" href="${item.name}/index.html">${item.name}</a> (<a href="${item.name}/index.json">json</a>)
                    <span class="Label Label--${testState}">${date}</span>
                </p>
            `).join("\n")}
        </div>

    </body>
</html>
`;

console.log(html);