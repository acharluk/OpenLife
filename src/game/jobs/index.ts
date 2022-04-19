import { Job } from '@/types/Job';
import President from './president';
import WebDeveloper from './web-developer';

const jobs: { [jobId: string]: Job } = {
  'web-developer': WebDeveloper,
  'president': President,
}

export default jobs;
