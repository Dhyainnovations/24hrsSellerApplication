import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrequentlyAskedQuestionsPage } from './frequently-asked-questions.page';

describe('FrequentlyAskedQuestionsPage', () => {
  let component: FrequentlyAskedQuestionsPage;
  let fixture: ComponentFixture<FrequentlyAskedQuestionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyAskedQuestionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrequentlyAskedQuestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
