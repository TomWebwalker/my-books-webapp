import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsFormComponent } from './authors-form.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthorsFormComponent', () => {
  let component: AuthorsFormComponent;
  let fixture: ComponentFixture<AuthorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsFormComponent, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
