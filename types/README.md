# @syi0808/types

Core type definitions for Aiki durable execution platform.

This package provides the foundational TypeScript types used throughout the Aiki ecosystem. It is typically not used
directly, but imported by other Aiki packages.

## Installation

```bash
npm install @syi0808/types
```

## Exports

- `/client` - Client configuration and API types
- `/workflow` - Workflow definition types
- `/workflow-run` - Workflow execution state types
- `/workflow-run-api` - API contract types
- `/task` - Task definition and state types
- `/trigger` - Trigger strategy types
- `/duration` - Duration types
- `/retry` - Retry strategy types
- `/error` - Serializable error types
- `/sleep` - Sleep definition types
- `/event` - Event definition types
- `/schedule` - Schedule definition types
- `/schedule-api` - API contract types

## Usage

These types are primarily used by other Aiki packages:

```typescript
import type { WorkflowOptions } from "@syi0808/types/workflow-run";
import type { TriggerStrategy } from "@syi0808/types/trigger";
```

## Related Packages

- [@syi0808/client](https://www.npmjs.com/package/@syi0808/client) - Client SDK
- [@syi0808/workflow](https://www.npmjs.com/package/@syi0808/workflow) - Workflow and Task SDK
- [@syi0808/worker](https://www.npmjs.com/package/@syi0808/worker) - Worker SDK

## Changelog

See the [CHANGELOG](https://github.com/aikirun/aiki/blob/main/CHANGELOG.md) for version history.

## License

Apache-2.0
