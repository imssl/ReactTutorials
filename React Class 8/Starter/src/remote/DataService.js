import {mockData} from './mockdata.js'

export function loadEmployee(index){
    return mockData[index];
 }
  
 export function createEmployee(employee){
     mockData.push(employee)
 }
 
 export function updateEmployee(position, employee){
     mockData[position]=employee;
 }
 
 export function deleteEmployee(position){
     //https://love2dev.com/blog/javascript-remove-from-array/
     mockData =mockData.splice(position,1);
 }
 
 export function loadEmployees(){
     return mockData;
 }