import { ComponentFixture, TestBed } from '@angular/core/testing';

import AuthorsCreateComponent from './authors-create.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthorsCreateComponent', () => {
  let component: AuthorsCreateComponent;
  let fixture: ComponentFixture<AuthorsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorsCreateComponent, NoopAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
