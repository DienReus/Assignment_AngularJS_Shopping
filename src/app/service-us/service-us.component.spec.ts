import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUsComponent } from './service-us.component';

describe('ServiceUsComponent', () => {
  let component: ServiceUsComponent;
  let fixture: ComponentFixture<ServiceUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
