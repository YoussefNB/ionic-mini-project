import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyexpensesPage } from './myexpenses.page';

describe('MyexpensesPage', () => {
  let component: MyexpensesPage;
  let fixture: ComponentFixture<MyexpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyexpensesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyexpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
