import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCuentaBancoPage } from './modal-cuenta-banco.page';

describe('ModalCuentaBancoPage', () => {
  let component: ModalCuentaBancoPage;
  let fixture: ComponentFixture<ModalCuentaBancoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCuentaBancoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCuentaBancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
