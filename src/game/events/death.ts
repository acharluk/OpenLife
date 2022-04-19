import { useLifeStore } from "@/store/life";
import { RandomEvent } from "../api/RandomEvent";

export class Death extends RandomEvent {
  chance = 0.005;

  run(lifeStore: ReturnType<typeof useLifeStore>): void {
    if (Math.random() < this.chance) {
      lifeStore.die();
    }

    this.chance += 0.005;
  }
}
