import type { Duration } from "@syi0808/types/duration";
import type { Logger } from "@syi0808/types/logger";
import type { ReplayManifest } from "@syi0808/types/replay-manifest";
import type { SleepResult } from "@syi0808/types/sleep";
import { INTERNAL } from "@syi0808/types/symbols";
import type { WorkflowName, WorkflowVersionId } from "@syi0808/types/workflow";
import type { WorkflowRunId, WorkflowStartOptions } from "@syi0808/types/workflow-run";

import type { EventsDefinition, EventWaiters } from "./event";
import type { WorkflowRunHandle } from "./handle";

export interface WorkflowRunContext<Input, AppContext, TEvents extends EventsDefinition = EventsDefinition> {
	id: WorkflowRunId;
	name: WorkflowName;
	versionId: WorkflowVersionId;
	options: WorkflowStartOptions;
	logger: Logger;
	sleep: (name: string, duration: Duration) => Promise<SleepResult>;
	events: EventWaiters<TEvents>;

	[INTERNAL]: {
		handle: WorkflowRunHandle<Input, unknown, AppContext, TEvents>;
		replayManifest: ReplayManifest;
		options: {
			spinThresholdMs: number;
		};
	};
}
