import { defineStore } from "pinia";
import { UserState } from "../interface/index";
import piniaPersistConfig from "@/config/piniaPersist";

export const UserStore = defineStore({
	id: "UserStore",
	state: (): UserState => ({
		name: "ceshi",
		csa: "121"
	}),
	actions: {
		addTabs() {
			console.log("212");
		}
	},
	persist: piniaPersistConfig("GlobalState")
});
