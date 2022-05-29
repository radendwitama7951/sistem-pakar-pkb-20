import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, pluck } from 'rxjs';

@Component({
  selector: 'app-diagnosa',
  templateUrl: './diagnosa.component.html',
  styleUrls: ['./diagnosa.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false },
    },
  ],
})
export class DiagnosaComponent implements OnInit {
  public userForm!: FormGroup;
  public mahasiswaForm!: FormGroup;
  public userHealthDataForm!: FormGroup;
  public isHandset$!: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.setIsHandset();
    this.setUserForm();
    this.setMahasiswaForm();
  }

  private setIsHandset(): void {
    this.isHandset$ = this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.Small])
      .pipe(pluck('matches'));
  }

  private setUserForm(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required, Validators.maxLength(64)]],
      last_name: ['', [Validators.required, Validators.maxLength(64)]],
    });
  }

  private setMahasiswaForm(): void {
    this.mahasiswaForm = this.fb.group({
      nim: ['', [Validators.required, Validators.maxLength(64)]],
      universitas: [
        'Universitas Udayana',
        [Validators.required, Validators.maxLength(64)],
      ],
      fakultas: ['', [Validators.required, Validators.maxLength(64)]],
      prodi: ['', [Validators.required, Validators.maxLength(64)]],
    });

    this.userHealthDataForm = this.fb.group({
      number_of_pregnant: [
        0,
        [Validators.required, Validators.max(99), Validators.min(0)],
      ],
      plasma_glucose_concentration: [
        0,
        [Validators.required, Validators.max(99), Validators.min(0)],
      ],
      diastolic_blood_pressure: [
        0,
        [Validators.required, Validators.max(99), Validators.min(0)],
      ],
      triceps_skin_fold_thikness: [
        0,
        [Validators.required, Validators.max(99), Validators.min(0)],
      ],
      two_hour_serum_insulin: [
        0,
        [Validators.required, Validators.max(99), Validators.min(0)],
      ],
      body_mass_index: [
        0,
        [Validators.required, Validators.max(99), Validators.min(0)],
      ],
      diabetes_pedigree_function: [
        0,
        [Validators.required, Validators.max(99), Validators.min(0)],
      ],
      age: [0, [Validators.required, Validators.max(99), Validators.min(0)]],
    });
  }

  public diagnosisUser(): void {
    console.table(this.userForm.value);
    console.table({
      ...this.mahasiswaForm.value,
      ...{ user: this.userForm.value },
    });
    console.table(this.userHealthDataForm.value);

    alert('Data Uploaded !');
  }
}
