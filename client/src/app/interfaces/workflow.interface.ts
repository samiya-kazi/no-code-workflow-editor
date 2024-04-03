import { IWorkflowStep } from "./workflow-step.interface";

export interface IWorkflow {
    id: string,
    steps: IWorkflowStep[],
    teamId: string
}