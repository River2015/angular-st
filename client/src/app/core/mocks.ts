import {IAuthor, ICourse} from './models/course';
import {IUser} from './models/user';

export const COURSES: Array<ICourse> = [
  {
    id: 1,
    name: '1 Video course',
    length: 90,
    date: '12/31/2020',
    description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
    isTopRated: true,
    author: [{id: 1, name: 'Smith'}]
  },
  {
    id: 2,
    name: '2 course',
    length: 120,
    date: '10/22/2020',
    description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
    isTopRated: false,
    author: [{id: 1, name: 'Smith'}]
  },
  {
    id: 3,
    name: '3 Video',
    length: 50,
    date: '10/30/2021',
    description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
    isTopRated: true,
    author: [{id: 1, name: 'Smith'}]
  },
  {
    id: 4,
    name: '4 course',
    length: 100,
    date: '12/20/2020',
    description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
    isTopRated: false,
    author: [{id: 1, name: 'Smith'}]
  },
  {
    id: 5,
    name: '5 course',
    length: 120,
    date: '12/21/2020',
    description: 'A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when',
    isTopRated: true,
    author: [{id: 1, name: 'Smith'}]
  }
];

export const USER: IUser = {
  id: 1,
  name: 'Ivan',
  surname: 'Ivanov',
};
