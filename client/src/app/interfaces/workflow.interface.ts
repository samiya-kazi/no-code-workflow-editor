import { IWorkflowStep } from "./workflow-step.interface";

export interface IWorkflow {
    id: string,
    name: string,
    steps: IWorkflowStep[],
    teamId: string
}