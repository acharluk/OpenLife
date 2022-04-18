import { defineStore } from "pinia";

type LifeState = {
  name: string | null,
};

export const useLifeStore = defineStore('life', {
    state: () => ({
        name: null,
    } as LifeState),
    actions: {
      beginGame(playerName: string) {
        this.$reset();
        this.name = playerName;
      },
    },
});
