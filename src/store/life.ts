import { Job } from "@/types/Job";
import { defineStore } from "pinia";

type LifeState = {
  name: string | null,
  age: number,
  balance: number,
  job: Job | null,
};

export const useLifeStore = defineStore('life', {
    state: () => ({
        name: null,
        age: 0,
        balance: 0,
        job: null,
    } as LifeState),
    getters: {
      jobTitle(): string {
        return this.job?.title || 'Unemployed'
      },
    },
    actions: {
      beginGame(playerName: string) {
        this.$reset();
        this.name = playerName;
      },
      advanceYear() {
        this.age++;

        if (this.job) {
          this.balance += this.job.salary;
        }
      },
      hasLife() {
        return this.name !== null;
      }
    },
});
