vohRegister.Views.Course = Backbone.View.extend({
	tagName : 'article',
	className : 'item  item--blue',

	events : {
		'click .js_course_checkbox' : 'carryCourse'
	},

	initialize : function(options){
		//templates
		this.template = swig.compile($('#template_course').html());
		template_section = swig.compile($('#template_group_semester').html());

		this.course_data = this.model;
		this.course_data.typeRender = options.typeRender;

		this.$where_render = options.where_render;

		this.loadData();
	},


	render : function(){
		var html_course = this.template(this.course_data);
		this.$el.html(html_course);
		this.$where_render.children('.js_semester' + this.course_data.semester).find('.js_content-semester').append(this.$el.html(html_course));
	},

	renderGroup : function(){
		var html_section = template_section(this.course_data);
		this.$where_render.append(html_section);

		this.render();
	},

	loadData : function(){
		var self = this;

		setTimeout(function() {
			$('.js_button-pre').addClass('fadeUp');

			//renderear de acuerdo al semestre
			var semester = self.model.semester;
			if (self.$where_render.children('.js_semester' + semester).hasClass('active')) {
				self.render();
			} else {
				self.renderGroup();
			}
		}, 300);
	},

	carryCourse : function(e){
		e.preventDefault();
		var $btn_carry_course = $(e.currentTarget);
		var $checkbox_carry_course = $btn_carry_course.siblings('input');
		var data_course = $btn_carry_course.data();

		this.updateCredits($checkbox_carry_course, data_course);

	},

	updateCredits : function($check_box, data_course){
		var credits_current = $('#js_credits_current').data().credits;
		console.log(credits_current);
		var type_course = data_course.type;

		// Carry course
		var credits_assign = parseInt($('#js_period-assign').data().credits);
		var credits_course = data_course.credits;
		if (!$check_box.prop('checked')){
			credits_current = parseInt(credits_current) + parseInt(credits_course);
			if (credits_current <= credits_assign) {
				$('#js_credits_current')
					.data('credits', credits_current)
					.html(credits_current);

				$check_box.prop('checked', true);
			}
		}else {
			credits_current = parseInt(credits_current) - parseInt(credits_course);
			$('#js_credits_current')
				.data('credits', credits_current)
				.html(credits_current);

			$check_box.prop('checked', false);
		}
	},
});