import { RandomEvent } from '../api/RandomEvent';
import { Death } from './death';
import { FiredFromJob } from './fired-from-job';


const randomEvents: { [eventId: string]: RandomEvent } = {
  'death': new Death,
  'fired-from-job': new FiredFromJob(),
}

export default randomEvents;
