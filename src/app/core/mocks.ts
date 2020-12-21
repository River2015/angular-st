import {ICourse} from './models/course';

export const COURSES: Array<ICourse> = [
  {
    id: 1,
    title: '1 Video course',
    duration: 90,
    creation: '12/31/2020',
    description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
    topRated: true
  },
  {
    id: 2,
    title: '2 course',
    duration: 120,
    creation: '12/20/2020',
    description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
    topRated: false
  },
  {
    id: 3,
    title: '3 Video',
    duration: 50,
    creation: '10/01/2021',
    description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
    topRated: true
  }
];
