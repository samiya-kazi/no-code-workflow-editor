import { Injectable } from '@angular/core';
import { IWorkflow } from '../interfaces/workflow.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor() { }

  workflows: IWorkflow[] = [];
  selectedWorkflow: IWorkflow | undefined;
  workflowSelectEvent = new Subject<IWorkflow | undefined>();

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

  selectWorkflow (workflow: IWorkflow) {
    this.selectedWorkflow = workflow;
    this.workflowSelectEvent.next(workflow);
  }
  
  deselectWorkflow () {
    this.selectedWorkflow = undefined;
    this.workflowSelectEvent.next(undefined);
  }
}
