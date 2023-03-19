import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditBoardComponent } from './modal-edit-board.component';

describe('ModalEditBoardComponent', () => {
  let component: ModalEditBoardComponent;
  let fixture: ComponentFixture<ModalEditBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
