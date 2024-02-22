import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsDeleteDialogComponent } from './authors-delete-dialog.component';

describe('AuthorsDeleteDialogComponent', () => {
  let component: AuthorsDeleteDialogComponent;
  let fixture: ComponentFixture<AuthorsDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsDeleteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
