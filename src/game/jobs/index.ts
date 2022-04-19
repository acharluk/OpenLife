import { Job } from '@/types/Job';
import WebDeveloper from './web-developer';

const jobs: { [jobId: string]: Job } = {
  'web-developer': WebDeveloper,
}

export default jobs;
