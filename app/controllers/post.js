import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		sayHello: function () {
			alert('Hello!');
		},
		toggleBody: function () {
			this.toggleProperty('isShowingBody');
		},
		submitAction: function () {
			alert(this.get('name'));
			alert(this.get('comment'));
		}
	},
	title: 'My Blog Post',
	body: 'This is the body of my blog post.',
	authors: ['William', 'Robert', 'Michelle'],
	comments: [
		{
			name: 'Mike Smith',
			comment: 'Thanks for the great post'
		},
		{
			name: 'John Doe',
			comment: 'Nice Post!'
		},
		{
			name: 'Jeff Williams',
			comment: 'Good job!'
		}
	]
});
