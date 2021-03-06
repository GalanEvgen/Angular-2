import { Component } from '@angular/core';

const todos = [
	{
		title: 'Изучить JavaScript',
		completed: true
	},
	{
		title: 'Изучить Angular 2',
		completed: false
	},
	{
		title: 'Написать приложение',
		completed: false
	}
];

@Component({
	moduleId: module.id,
	selector: 'reddit',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
	
})

export class RedditAppComponent {
	title= 'Angular-2 first start :)',
	todos = todos;

	toggle(todo: any) {
		[todo.completed = !todo.completed;
		console.log('toggle', todo)]
	}
	
	delete(todo: { completed: boolean }){
		let index = this.todos.indexOf(todo);
		
		if (index > -1) {
			this.todos.splice(index, 1);
		}
	}
}