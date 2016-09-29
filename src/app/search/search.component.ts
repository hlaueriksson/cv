import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Resume, Project } from '../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() resume: Resume;

  result: Observable<Project[]>;
  private searchTerms = new Subject<string>();

  ngOnInit(): void {
    this.result = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the search observable
        ? this.searchProjects(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Project[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Project[]>([]);
      });
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  searchProjects(term: string): Observable<Project[]> {
    let result: Project[] = [];
    let projects = this.getProjects(term);

    projects.forEach(project => {
      result.push(project);
    });

    return Observable.of<Project[]>(result);
  }

  getProjects(term: string): Project[] {
    let result: Project[] = [];

    this.resume.positions.forEach(position => {
      position.projects.forEach(project => {
        if (this.contains(project.tokens, term)) {
          result.push(project);
        }
      });
    });

    return result;
  }

  contains(value: string, term: string): boolean {
    return value.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) >= 0;
  }
}
