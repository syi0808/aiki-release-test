import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { ApiKeyApi } from "@syi0808/types/api-key-api";
import type { NamespaceApi } from "@syi0808/types/namespace-api";
import type { ScheduleApi } from "@syi0808/types/schedule-api";
import type { WorkflowApi } from "@syi0808/types/workflow-api";
import type { WorkflowRunApi } from "@syi0808/types/workflow-run-api";

const AIKI_SERVER_URL = import.meta.env.VITE_AIKI_SERVER_URL || "http://localhost:9850";

const fetchWithCredentials = (url: RequestInfo | URL, options?: RequestInit) =>
	fetch(url, { ...options, credentials: "include" });

const namespaceAuthedLink = new RPCLink({
	url: `${AIKI_SERVER_URL}/web`,
	fetch: fetchWithCredentials,
});

const organizationAuthedLink = new RPCLink({
	url: `${AIKI_SERVER_URL}/web/namespace`,
	fetch: fetchWithCredentials,
});

export const client = createORPCClient(namespaceAuthedLink) as unknown as {
	apiKey: ApiKeyApi;
	schedule: ScheduleApi;
	workflow: WorkflowApi;
	workflowRun: WorkflowRunApi;
};

export const namespaceManagementClient = createORPCClient(organizationAuthedLink) as unknown as NamespaceApi;

export async function createNamespace(name: string) {
	const data = await namespaceManagementClient.createV1({ name });
	return {
		namespace: {
			...data.namespace,
			createdAt: new Date(data.namespace.createdAt),
		},
	};
}
