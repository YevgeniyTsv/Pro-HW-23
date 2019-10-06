import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { School } from './app/model/School.model'
import { Courses } from './app/model/Courses.model';
import { school } from './app/model/Scool.object';
import { ISchool } from './app/model/ISchool.model';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log('Task # 2');


function minIdCourses(school: School): Courses {
  const { courses } = school;
  return courses.reduce((a, c) => a.id > c.id ? c : a);
}

const minIdCourse:Courses = minIdCourses(school);
console.log('Object in array "courses" with the smallest id: ', minIdCourse);

console.log('Task # 3');

function factorial(num: string | number): number {
  num = typeof num === 'string' ? parseInt(num) : num;
  let result: number = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

console.log(`Factorial 10!: ${factorial(10)}`);

console.log('Task # 4');

class SchoolClass implements ISchool {
  name: string;
  executive: string;
  constructor({ name, executive }: School) {
    this.name = name;
    this.executive = executive;
  }
  getSchoolName() {
    return this.name;
  }
  getExecutive() {
    return this.executive;
  }
}

const schoolClass = new SchoolClass(school);
console.log(`School name: ${schoolClass.getSchoolName()}`);
console.log(`Executive name: ${schoolClass.getExecutive()}`);