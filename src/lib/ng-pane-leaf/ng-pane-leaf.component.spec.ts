import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPaneLeafComponent } from './ng-pane-leaf.component';

describe('NgPaneLeafComponent', () => {
  let component: NgPaneLeafComponent;
  let fixture: ComponentFixture<NgPaneLeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPaneLeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPaneLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
