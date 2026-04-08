import { workflow } from "@syi0808/workflow";

export const notify = workflow({ name: "notify" }).v("1.0.0", {
	async handler(run, input: string) {
		run.logger.info(input);
	},
});
