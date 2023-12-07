import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditmodalpagePage } from './editmodalpage.page';

describe('EditmodalpagePage', () => {
  let component: EditmodalpagePage;
  let fixture: ComponentFixture<EditmodalpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditmodalpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
