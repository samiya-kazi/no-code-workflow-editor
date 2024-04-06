import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../services/workflow.service';
import { IWorkflowStep } from '../interfaces/workflow-step.interface';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrl: './edit-area.component.css'
})
export class EditAreaComponent implements OnInit {

  steps: IWorkflowStep[] | undefined = [];

  constructor(private workflowService: WorkflowService) {}

  ngOnInit(): void {
    this.workflowService.workflowSelectEvent.subscribe(workflow => {
      if (workflow) this.steps = workflow.steps;
      else this.steps = undefined;
    })
  }

  addStep (index?: number) {
    if (this.steps) {
      if (index === undefined) index = this.steps.length;

      const newStep : IWorkflowStep = {
        workflowId: "1", //this.workflowService.selectedWorkflow.id,
        name: 'New Step',
        step: index + 1,
        role: 'unassigned',
        description: 'Add description',
        type: 'read',
      }

      const newSteps = [...this.steps.slice(0, index), newStep, ...this.steps.slice(index)]

      this.steps = newSteps.map((prevStep, index) => ({...prevStep, step: index + 1}));
    }
  }

}
