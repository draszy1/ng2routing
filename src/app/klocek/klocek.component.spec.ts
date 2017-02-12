/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KlocekComponent } from './klocek.component';

describe('KlocekComponent', () => {
  let component: KlocekComponent;
  let fixture: ComponentFixture<KlocekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlocekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlocekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
