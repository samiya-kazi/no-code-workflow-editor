import { Injectable } from '@angular/core';
import { IWorkflow } from '../interfaces/workflow.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor() { }

  workflows: IWorkflow[] = [];

  addWorkflow (workflow: IWorkflow) {
    this.workflows.push(workflow);
    return this.workflows;
  }

  updateWorkflow (workflow: IWorkflow) {
    this.workflows = this.workflows.map(item => item.id === workflow.id ? workflow : item);
    return workflow
  }

  removeWorkflow (workflow: IWorkflow) {
    this.workflows = this.workflows.filter(item => item.id !== workflow.id);
    return workflow
  }
}
