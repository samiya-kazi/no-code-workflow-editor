import { Component, Input } from '@angular/core';
import { IWorkflowStep } from '../../interfaces/workflow-step.interface';

@Component({
  selector: 'app-workflow-step-card',
  templateUrl: './workflow-step-card.component.html',
  styleUrl: './workflow-step-card.component.css'
})
export class WorkflowStepCardComponent {

  @Input() step!: IWorkflowStep;

}
