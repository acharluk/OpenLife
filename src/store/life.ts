import randomEvents from "@/game/events";
import { router } from "@/router";
import { Job } from "@/types/Job";
import { defineStore } from "pinia";

export type LifeState = {
  name: string | null,
  age: number,
  balance: number,
  job: Job | null,
  events: string[],
};

export const initialState: () => LifeState = () => ({
  name: null,
  age: 0,
  balance: 0,
  job: null,
  events: [],
});

export const useLifeStore = defineStore('life', {
    state: initialState,
    getters: {
      jobTitle(): string {
        return this.job?.title || 'Unemployed';
      },
    },
    actions: {
      beginGame(playerName: string) {
        this.$reset();
        this.name = playerName;

        this.addEvent(`You started a new life as ${this.name}`);
      },
      advanceYear() {
        this.age++;

        if (this.job) {
          this.balance += this.job.salary;
        }

        Object.values(randomEvents).forEach((ev) => {
          ev.run(this);
        });

        this.addEvent(`You are now ${this.age}`);
      },
      hasLife() {
        return this.name !== null;
      },
      addEvent(event: string) {
        this.events.push(event);
      },
      die() {
        router.push({ name: 'death' });
      }
    },
});
