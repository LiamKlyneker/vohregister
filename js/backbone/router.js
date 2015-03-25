vohRegister.Routers.Base = Backbone.Router.extend({
	routes : {
		''             : 'index',
		'vohregister/' : 'index'
	},
	
	initialize : function(){
		Backbone.history.start({
			root      : '',
			pushState : true
		});
	},
	
	index : function(){ 
		var data_courses = [{
								'id'             : 1,
								'name'           : 'Astronomia',
								'teacher'        : 'Ing. Mateo Aldebaran, Rodrigo',
								'credits'        : 4,
								'turn'           : 'Mañana',
								'semester'       : 1,
								'semester_roman' : 'I'},
							{
								'id'             : 2,
								'name'           : 'Historia y Geografía',
								'teacher'        : 'Ing. Rivera Torres, Baldeon',
								'credits'        : 4,
								'turn'           : 'Tarde',
								'semester'       : 1,
								'semester_roman' : 'I'},
							{
								'id'             : 3,
								'name'           : 'Ingles I',
								'teacher'        : 'Ing. Marcela Rodriguez, Ana',
								'credits'        : 4,
								'turn'           : 'Tarde',
								'semester'       : 1,
								'semester_roman' : 'I'},

							{
								'id'             : 4,
								'name'           : 'Ciencias Sociales',
								'teacher'        : 'Lic. Salcedo Soto, Paola',
								'credits'        : 4,
								'turn'           : 'Mañana',
								'semester'       : 1,
								'semester_roman' : 'I'},

							{
								'id'             : 5,
								'name'           : 'Frances II',
								'teacher'        : 'Lic. Toulalan Teyllaran, Marco',
								'credits'        : 4,
								'turn'           : 'Noche',
								'semester'       : 2,
								'semester_roman' : 'II'},
							{
								'id'             : 6,
								'name'           : 'Italiano III',
								'teacher'        : 'Ing. Rigazzi Tune, Fabriccio',
								'credits'        : 4,
								'turn'           : 'Tarde',
								'semester'       : 2,
								'semester_roman' : 'II'} 
							];
		var data_render = {	type : 'N',
						conditional_amount : null };
		var view_paragraph = new vohRegister.Views.Paragraphs({	data_render : data_render, 
																where_render : $('#js_paragraph') });

		data_courses.forEach(function(course){
			view = new vohRegister.Views.Course({
												model        : course,
												typeRender   : 'A',
												where_render : $('#js_main-data') });
		});
	},

	/*period : function(){
		var years = new eUndac.Collections.Years();
		years.fetch();

		var collection_periods = new eUndac.Collections.Admin_Periods({ id : null });
		years.on('add', function(model){

			header_interaction = new eUndac.Views.Interaction_Header({model:model, collection : collection_periods});
		});

		var period_form = new eUndac.Views.Period_Form({template : $('#js_content_new').html(), 
														collection : collection_periods});
	},

	preregister : function(){
		//pagos
		var model_user_payment    = new eUndac.Models.UserPayment();
		var model_user_data = new eUndac.Models.UserData();
		var more_semester = null;
		var more_credits  = null;
		
		model_user_data.fetch({
			success : function(model, response){
				var model_user = model;
				var response_user = response;
				var success_pre = response.current_register.state;
				if (!success_pre || success_pre === 'B') {
					model_user_payment.fetch({
						success : function(model, response){
							var state_payment = response.current_payment.state;
							var pre_auxiliar = new eUndac.Views.PreregisterAuxiliar({   type : 'PA',
																						model : model, 
																						model_credits : model_user});
							pre_auxiliar.render();
							$('.js_auxiliar').html(pre_auxiliar.$el);

							// condiciones
							if (!success_pre || success_pre === 'B') {
								if (response_user.conditions) {
									var conditions = response_user.conditions;
									conditions.forEach(function(condition){
										if (condition.code == 'CA') {
											more_credits = condition.amount;
										} else if (condition.code == 'SA') {
											more_semester = condition.amount;
										}
									});
								}
							}

							// verificar pago
							if (state_payment !== 'EP' && state_payment !== 'LP' && state_payment !== 'OT') {
								//preregister
								var student_courses = new eUndac.Collections.PreregisterCourses({
																									model_user    : model_user,
																									success_pre   : success_pre,
																									more_semester : more_semester,
																									more_credits  : more_credits  });
							} else {
								var error_view = new eUndac.Views.TypeError({ model : model });
							}
						},
						error : function(){

						}
					});
				} else if (success_pre === 'I' || success_pre === 'M'){
					var student_courses = new eUndac.Collections.PreregisterCourses({
																						model_user    : model,
																						success_pre   : success_pre,
																						more_semester : more_semester,
																						more_credits  : more_credits  });

				}
			},
			error : function(){

			}
		});
	}*/
});