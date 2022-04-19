import * as fs from 'fs';

const jobsPath = './gamedata/jobs';
const dir = fs.opendirSync(jobsPath);

const jobList = {};

let file = dir.readSync();
while (file) {
  console.log('Loading ' + file.name);

  const jobdata = JSON.parse(fs.readFileSync('gamedata/jobs/' + file.name).toString());
  jobList[jobdata.id] = jobdata;

  file = dir.readSync();
}

console.log(jobList);

const output = `export default ${JSON.stringify(jobList)}`;

fs.writeFileSync('src/game/jobs/allJobs.ts', output);
