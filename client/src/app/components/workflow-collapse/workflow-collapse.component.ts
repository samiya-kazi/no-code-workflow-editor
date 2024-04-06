import { Component, Input } from '@angular/core';
import { ITeam } from '../../interfaces/team.interface';
import { WorkflowService } from '../../services/workflow.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IWorkflow } from '../../interfaces/workflow.interface';

@Component({
  selector: 'app-workflow-collapse',
  templateUrl: './workflow-collapse.component.html',
  styleUrl: './workflow-collapse.component.css'
})
export class WorkflowCollapseComponent {

  @Input() team!: ITeam
  isVisible: boolean = false;

  addWorkflowForm = this.fb.group({
    name: new FormControl('', [Validators.required])
  })

  constructor(
    private workflowService: WorkflowService,
    private fb: FormBuilder
  ) {}

  filterWorkflows (team: ITeam) {
    return this.workflowService.workflows.filter(item => item.teamId === team.id);
  }

  handleWorkflowSelect (workflow: IWorkflow) {
    this.workflowService.selectWorkflow(workflow);
  }

  showModal () {
    this.isVisible = true;
  }
  
  handleCancel () {
    this.isVisible = false;
  }
  
  handleOk () {
    this.isVisible = false;

    const newWorkflow : IWorkflow= {
      id: Date.now().toString(),
      name: this.addWorkflowForm.value.name!,
      steps: [],
      teamId: this.team.id
    }

    this.workflowService.addWorkflow(newWorkflow);
    this.addWorkflowForm.reset();
  }
}
