import { DataService } from '../data.service';
import { UserComponent } from './user.component';
import { TestBed } from '@angular/core/testing';

describe('My Test Suite', () => {

  beforeEach(async ()=>{
    TestBed.configureTestingModule({
      declarations : [UserComponent],
      providers :  [DataService]
    }).compileComponents()
  })

  let fixture;
  let app;
  let ds : DataService;
  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    app = fixture.debugElement.componentInstance;
    ds = new DataService();
    fixture.detectChanges();
  });

  it('Should create the Component', () => {
    expect(app).toBeTruthy();
  })

  it('Should populate the name', () => {
    const user = ds.getName();
    expect(app.user.name).toEqual(user.name);
  })

  it('Should render user name on template', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Foo')
  })
})
