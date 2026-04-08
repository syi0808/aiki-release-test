import type { ScheduleApi } from "@syi0808/types/schedule-api";
import type { WorkflowRun } from "@syi0808/types/workflow-run";
import type { WorkflowRunApi } from "@syi0808/types/workflow-run-api";

import type { Logger } from "./logger";
import { INTERNAL } from "./symbols";

export interface ClientParams<AppContext = null> {
	url: string;
	apiKey: string;
	logger?: Logger;
	createContext?: (run: Readonly<WorkflowRun>) => AppContext | Promise<AppContext>;
}

export interface Client<AppContext = null> {
	api: ApiClient;
	logger: Logger;
	[INTERNAL]: {
		createContext?: (run: WorkflowRun) => AppContext | Promise<AppContext>;
	};
}

export interface ApiClient {
	workflowRun: WorkflowRunApi;
	schedule: ScheduleApi;
}
