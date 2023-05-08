import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { Command } from '../models/Command.models';

@Component({
  selector: 'app-addcolisfromlist',
  templateUrl: './addcolisfromlist.component.html',
  styleUrls: ['./addcolisfromlist.component.css']
})
export class AddcolisfromlistComponent {
}
