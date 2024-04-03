export interface IWorkflowStep {
    workflowId: string,
    name: string,
    step: number,
    role: string,
    description: string,
    type: 'read' | 'read/write',
}