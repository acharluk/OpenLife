import {  useLifeStore } from "@/store/life";

export abstract class RandomEvent {
  abstract run(lifeStore: ReturnType<typeof useLifeStore>): void;
}
