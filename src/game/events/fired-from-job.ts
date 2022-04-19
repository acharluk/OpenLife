import { useLifeStore } from "@/store/life";
import { RandomEvent } from "../api/RandomEvent";

export class FiredFromJob extends RandomEvent {
  run(lifeStore: ReturnType<typeof useLifeStore>): void {
    if (lifeStore.job && Math.random() < lifeStore.job.firedChance) {
      lifeStore.job = null;
      lifeStore.addEvent('You got fired from your job :(');
    }
  }
}

// function createRandomEvent(chance: number, func: (lifeStore: ReturnType<typeof useLifeStore>) => void) {
//   return {
//     // init(_lifeStore: ReturnType<typeof useLifeStore>) {
//     //   lifeStore = _lifeStore
//     // },
//     run: func,
//   }
// }


// createRandomEvent(0.9, (lifeStore) => {
//   lifeStore.job = null;
// });
