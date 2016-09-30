/* tslint:disable:no-unused-variable */

/*
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PositionComponent } from './position/position.component';
import { ResumeService } from './resume.service';
import { Resume } from './models';

describe('App: CV', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchComponent,
        PositionComponent
      ],
      providers: [
        { provide: ResumeService, useClass: MockResumeService }
      ]
    }).overrideComponent(SearchComponent, {
      set: {
        template: ''
      }
    }).overrideComponent(PositionComponent, {
      set: {
        template: ''
      }
    })
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'CV'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CV');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('CV');
  }));

});

export class MockResumeService {

  getResume(): Promise<Resume> {
    return Promise.resolve(new Resume());
  }
}
*/