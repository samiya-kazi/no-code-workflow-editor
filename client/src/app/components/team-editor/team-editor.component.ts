import { Component } from '@angular/core';
import { ITeam } from '../../interfaces/team.interface';
import { TeamService } from '../../services/team.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-editor',
  templateUrl: './team-editor.component.html',
  styleUrl: './team-editor.component.css'
})
export class TeamEditorComponent {

  teams: ITeam[] = this.teamService.teams;
  isVisible: boolean = false;

  addTeamForm = this.fb.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
  })

  constructor (private teamService: TeamService, private fb: FormBuilder) {}

  showModal () {
    this.isVisible = true;
  }
  
  handleCancel () {
    this.isVisible = false;
  }
  
  handleOk () {
    this.isVisible = false;
    const newTeam = {
      id: Date.now().toString(),
      name: this.addTeamForm.value.name!,
      description: this.addTeamForm.value.description!,
      color: this.addTeamForm.value.color!,
      deptId: "1"
    }

    this.teamService.addTeam(newTeam);
    console.log(this.teams)
  }
}
