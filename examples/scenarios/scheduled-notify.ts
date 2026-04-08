import { delay } from "@syi0808/lib/async";
import { schedule } from "@syi0808/workflow";

import { runWithWorker } from "../shared/worker";
import { notify } from "../workflows/notify";

const everyFiveSeconds = schedule({
	type: "interval",
	every: { seconds: 5 },
	overlapPolicy: "skip",
});

await runWithWorker([notify], async (client) => {
	const scheduleHandle = await everyFiveSeconds.activate(client, notify, "This is a reminder");
	await delay(20_000);
	await scheduleHandle.pause();
});
