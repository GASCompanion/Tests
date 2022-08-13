
const fs = require("fs");
const path = require("path");

const dirs = fs.readdirSync("./builds", { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .filter((item) => !item.name.startsWith("."))
    .map((item) => {
        const basedir = path.join(__dirname, "builds");
        const time = fs.statSync(path.join(basedir, item.name)).mtime.getTime();
        const jsonPath = path.join(basedir, item.name, "index.json");
        const context = fs.existsSync(jsonPath) ? require(jsonPath) : {};
        const { reportCreatedOn, failed, succeededWithWarnings  } = context;
        const testState = failed > 0 ? "error" : succeededWithWarnings > 0 ? "warning" : "success";

        let date =  new Date();
        
        if (reportCreatedOn) {
            date = new Date(`${reportCreatedOn.split("-")[0].replace(/\./g, "-")}T${reportCreatedOn.split("-")[1].replace(/\./g, ":")}.000Z`);
        }

        return { item, time, date, testState }
    })
    .sort((left, right) => right.date.getTime() - left.date.getTime() );

const html = `## Test Reports

| Build | Json | Date | Status |
| ----- | ---- | ---- | ------ |
${dirs.map(({ item, time, date, testState }) => `
| [${item.name}](${item.name}/index.html) | [index.json](${item.name}/index.json) | ${date ? date.toUTCString() : '' } | ${testState} |
`).map(item => item.trim() ).join("\n")}

---

Generated on ${new Date().toUTCString()}

`;

console.log(html);