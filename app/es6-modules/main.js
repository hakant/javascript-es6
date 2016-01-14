import {Employee, log, modelEmployee} from "./Employee";
import Factory from "../es5/Factory";

log(modelEmployee);

var e = new Employee("Scott");
e.s_name = "Joy";
document.write(e.doWork());
document.write("<br/>");

var factory = new Factory("Tesla");
document.write(factory.doWork());
document.write("<br/>");

import {Company} from "./Company";

let company = new Company();
company.hire("Joy", "Sue", "Tim", "Tom");
document.write(company.doWork());
document.write("<br/>");
