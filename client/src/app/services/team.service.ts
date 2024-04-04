import { Injectable } from '@angular/core';
import { ITeam } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  teams: ITeam[] = [
    {
      id: "1",
      name: "Account Opening",
      deptId: "1",
      description: "Personal and non-personal account opening services",
      color: "#92e0b0"
    },
    {
      id: "2",
      name: "Account Servicing",
      deptId: "1",
      description: "Personal and non-personal account opening services",
      color: "#e0e092"
    },
    {
      id: "3",
      name: "Account Closing",
      deptId: "1",
      description: "Personal and non-personal account opening services",
      color: "#e0b892"
    }
  ];

  addTeam (team: ITeam) {
    this.teams.push(team);
    return this.teams;
  }

  updateTeam (team: ITeam) {
    this.teams = this.teams.map(item => item.id === team.id ? team : item);
    return team
  }

  removeTeam (team: ITeam) {
    this.teams = this.teams.filter(item => item.id !== team.id);
    return team
  }
}
