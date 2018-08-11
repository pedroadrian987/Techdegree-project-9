/*-------------notification alerts------------------------*/
$(document).ready(function (){ //this makes the circle in the bell and a notification appear after 3 seconds the page is loaded
	function notification1(){
		$(".bell_circle").css("display", "flex");
		alert("You got a new notification");
	}
	setTimeout(notification1, 3000);
});




var counter = 0;

function bell(){ //this dissapears the circle in the notification bell
	$(".bell_circle").css("display", "none");
	counter +=1;
}

$(".bell").click(function(){ //this make appear a new notification after 3 seconds, two times
	bell();
	if (counter < 3){
		function notification2(){
			$(".bell_circle").css("display", "flex");
			alert("You got a new message. Check your notifications");
		}
		setTimeout(notification2, 3000);
	}
});









/*-------------alert layout-----------------------------------------------------------------------------------*/
$(".alert_main svg").click(function(){ //this makes that when the user clicks the "x" in the alert it makes the alert dissapear
	$(".alert_main").css("display", "none");
	if($('header').width() < 1200){
		$('.bar').css("margin-top", 55);
		$('.dunkin').css("margin-top", 55);
	}

	function alertChosenOne(){ // this is a little joke as another alert after 2 seconds the "x" is clicked
		alert('If your computer didn´t melt in 2 seconds this means you are the ONE. Lead with John Connor the war against Skynet');
	}

	setTimeout(alertChosenOne, 2000);
});











/*-------------charts--------------------------------------------------------------------------------------------------*/
//chart line data
var ctx = document.getElementById('canvas_line').getContext('2d');
var config = {
	type: 'line',
	data: {
		labels: ['', '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31', ''],
		datasets:[{
			lineTension: 0,
			data:[0,700,1400,1000,1500,2000,1500,1700,1400,1700,2300,1700, 2300],
			backgroundColor:'rgba(122, 106, 201, 0.2)',
			pointBorderColor:'#7a6ac9',
			pointBackgroundColor: '#fff',
			borderColor: '#7a6ac9',
			borderWidth: 1,
			pointRadius: 2,
			pointBorderWidth: 3
		}],
	},
	options: {
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: false
		},
		scales: {
			xAxes: [{
				ticks: {
					fontColor: 'rgba(0, 0, 0, 0.3)'
				}
			}],
			yAxes: [{
				ticks: {
					suggestedMin: 0,
					suggestedMax: 2500,
					fontColor: 'rgba(0, 0, 0, 0.3)'
				}
			}]
		}
	}
};

//chart bar data
var ctx2 = document.getElementById('canvas_bar').getContext('2d');
var config2 = {
	type: 'bar',
	data: {
		labels: ['s','m','t','w','t','f','s'],
		datasets: [{
			backgroundColor:'rgba(122, 106, 201, 0.9)',
			borderWidth: 1,
			data: [75,100,175,125,225,200,100
			]
		}],

	},
	options: {
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			display: false
		},
		scales: {
			xAxes: [{
				ticks: {
					fontColor: 'rgba(0, 0, 0, 0.3)'
				}
			}],
			yAxes: [{
				ticks: {
					fontColor: 'rgba(0, 0, 0, 0.3)'
				}
			}]
		}

	}
};

//chart doughnut datasets
	var ctx3 = document.getElementById('canvas_dunkin').getContext('2d');
	var config3 = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [18,15,67],
				backgroundColor: ['#76cf7e','#71afcf','#7a6ac9']
			}],
			labels: [
				'Phones',
				'Tablets',
				'Desktop'
			]
		},
		options: {
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				position: 'right',
				labels: {
					boxWidth: 14
				}
			},
			title: {
				display: false,

			},
			animation: {
				animateScale: true,
				animateRotate: true
			},
			rotation: -1.9
		}
	};


window.onload = function() { //this makes every new loaded window the charts appear with their respective configuration or data
	window.myLine = new Chart(ctx, config);
	window.myBar = new Chart(ctx2, config2);
	window.myDoughnut = new Chart(ctx3, config3);
};


// chart buttons events

$(".chart_opt li p").click(function() { //this makes the user change the data view in the line chart depending on which button is clicked
	$(".chart_opt li p").removeClass("time_active");
	$(event.target).addClass("time_active");

	if ($(".chart_opt li:first-child p").hasClass("time_active")){ //this is the hourly configuration or data
	ctx = document.getElementById('canvas_line').getContext('2d');
		config = {
			type: 'line',
			data: {
				labels: ['', '07:00', '09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00', '23:00', '01:00', '03:00', ''],
				datasets:[{
					lineTension: 0,
					data:[0,100,800,1300,1000,1500,2400,1700,2000,1200,2000,1300,700],
					backgroundColor:'rgba(122, 106, 201, 0.2)',
					pointBorderColor:'#7a6ac9',
					pointBackgroundColor: '#fff',
					borderColor: '#7a6ac9',
					borderWidth: 1,
					pointRadius: 2,
					pointBorderWidth: 3
				}],
			},
			options: {
				maintainAspectRatio: false,
				responsive: true,
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						ticks: {
							fontColor: 'rgba(0, 0, 0, 0.3)'
						}
					}],
					yAxes: [{
						ticks: {
							suggestedMin: 0,
							suggestedMax: 2500,
							fontColor: 'rgba(0, 0, 0, 0.3)'
						}
					}]
				}
			}
		};

		window.myLine = new Chart(ctx, config); //this makes the new chart appear and replace the last one selected

	} else if($(".chart_opt li:nth-child(2) p").hasClass("time_active")) {//this is the daily configuration or data
		ctx = document.getElementById('canvas_line').getContext('2d');
			config = {
				type: 'line',
				data: {
					labels: ['', 's', 'm', 't', 'w', 't', 'f', 's'],
					datasets:[{
						lineTension: 0,
						data:[0,700,850,1300,1000,500,400,1700],
						backgroundColor:'rgba(122, 106, 201, 0.2)',
						pointBorderColor:'#7a6ac9',
						pointBackgroundColor: '#fff',
						borderColor: '#7a6ac9',
						borderWidth: 1,
						pointRadius: 2,
						pointBorderWidth: 3
					}],
				},
				options: {
					maintainAspectRatio: false,
					responsive: true,
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							ticks: {
								fontColor: 'rgba(0, 0, 0, 0.3)'
							}
						}],
						yAxes: [{
							ticks: {
								suggestedMin: 0,
								suggestedMax: 2500,
								fontColor: 'rgba(0, 0, 0, 0.3)'
							}
						}]
					}
				}
			};

			window.myLine = new Chart(ctx, config);//this makes the new chart appear and replace the last one selected

	} else if($(".chart_opt li:nth-child(3) p").hasClass("time_active")) {//this is the weekly configuration or data
	 	ctx = document.getElementById('canvas_line').getContext('2d');
			config = {
				type: 'line',
				data: {
					labels: ['', '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31', ''],
					datasets:[{
						lineTension: 0,
						data:[0,700,1400,1000,1500,2000,1500,1700,1400,1700,2300,1700, 2300],
						backgroundColor:'rgba(122, 106, 201, 0.2)',
						pointBorderColor:'#7a6ac9',
						pointBackgroundColor: '#fff',
						borderColor: '#7a6ac9',
						borderWidth: 1,
						pointRadius: 2,
						pointBorderWidth: 3
					}],
				},
				options: {
					maintainAspectRatio: false,
					responsive: true,
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							ticks: {
								fontColor: 'rgba(0, 0, 0, 0.3)'
							}
						}],
						yAxes: [{
							ticks: {
								suggestedMin: 0,
								suggestedMax: 2500,
								fontColor: 'rgba(0, 0, 0, 0.3)'
							}
						}]
					}
				}
			};

		window.myLine = new Chart(ctx, config);//this makes the new chart appear and replace the last one selected

	} else if($(".chart_opt li:nth-child(4) p").hasClass("time_active")) {//this is the monthly configuration or data
		ctx = document.getElementById('canvas_line').getContext('2d');
			config = {
				type: 'line',
				data: {
					labels: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
					datasets:[{
						lineTension: 0,
						data:[0,1100,700,2000,1800,2200,1700,2500,1700,1200,1000,2700, 1400],
						backgroundColor:'rgba(122, 106, 201, 0.2)',
						pointBorderColor:'#7a6ac9',
						pointBackgroundColor: '#fff',
						borderColor: '#7a6ac9',
						borderWidth: 1,
						pointRadius: 2,
						pointBorderWidth: 3
					}],
				},
				options: {
					maintainAspectRatio: false,
					responsive: true,
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							ticks: {
								fontColor: 'rgba(0, 0, 0, 0.3)'
							}
						}],
						yAxes: [{
							ticks: {
								suggestedMin: 0,
								suggestedMax: 2500,
								fontColor: 'rgba(0, 0, 0, 0.3)'
							}
						}]
					}
				}
			};

		window.myLine = new Chart(ctx, config);//this makes the new chart appear and replace the last one selected
	}


});






/*------message---------------------------------------------------------------------------------------*/

/*message user input*/
var members_A = ["victoria chambers",
"dale byrd",
"dawn wood",
"dan oliver",
"andrea kovacks",
"gina solezi",
"josh sullivan"];

var counter = 0;

$(".message_u_i").keyup(function(){//this checks the name of the users in the input area an compare with the existing ones to show a dropdown menu
	var keyPrs = String.fromCharCode(event.keyCode).toLowerCase();//this inserts the value of the keypressed as a string into a variable
	$(".autocomplete-items").remove();//this removes every past block element that contained any similarity
	var valTxt = $(".message_u_i").val().toLowerCase();// this inserts the value of the input into a variable

	if (event.keyCode == 8 && counter > 0){//this ensures the use of the backspace key and the count of keys pressed up
		counter = counter - 1;
	} else if (valTxt == "") {
		counter = 0;
	}	else {
		counter = counter + 1;
	}

	for (let i = 0; i < members_A.length; i++){//this is a loop that will repeat for every element in the members_A array
		var chars_A = (members_A)[i].toLowerCase();//this inserts in a variable the element at the moment selected in the loop
		if (valTxt == chars_A.substring(0, counter)){/*this conditional compares the value of the input and the letters inside
																									the element selected from the array.from 0 to the number of keys pressed up*/
			var a = document.createElement("div");//from this point below is created a div element with the element selected at the moment
			a.setAttribute("id", this.id + "autocomplete-list");
			a.setAttribute("class", "autocomplete-items");
			$("div.autocomplete").append(a);
			a.innerHTML =  "<span>" + "<strong>" + chars_A.substring(0, counter) + "</strong>" + chars_A.substr(counter,chars_A.length) + "</span>";
		}
	}

	if (counter == 0){//this cleans the div elements created before, if the input is empty
		$(".autocomplete-items").remove();
	}

	$(".autocomplete-items span").click(function(){//this makes the input be completed with the word selected in the dropdown menu if clicked
		$(".message_u_i").val($(this).text());
		$("div.autocomplete").empty();
	});
});



/*message button*/

$(".message_u .button").click(function(){//this gives an alert message if the input username is empty or incomplete  if not it will show a message of succes, also this will dissapear after 3 seconds
	 var arrayVal = members_A.indexOf($(".message_u_i").val());
	if ($(".message_u_i").val() == ""  || arrayVal == -1){
		alert("username is missing or is not specified");
	} else {
		$(".message_recieved").css("display", "flex");
		function message(){
			$(".message_recieved").css("display", "none");
		}
		setTimeout(message, 3000);
	}
});







/*-------------settings-----------------------------------------------------*/


if (localStorage.length == 0){//this makes if the localStorage is empty any chosen option false
	localStorage.setItem("sendEmail", false);
	localStorage.setItem("publicProfile", false);
}


$(".switch .slider").click(function(){//this makes the first on off switch be saved as false or true depending on the user's decision. also it keeps the value safe after a new load of the document
	if (localStorage.getItem("sendEmail") == "false"){
		localStorage.setItem("sendEmail", true);
	} else if (localStorage.getItem("sendEmail") == "true" && $("input:checked + .slider")[0] == $(".slider.round.one")[0]){
		localStorage.setItem("sendEmail", false);
	}
});

$(".switch2 .slider").click(function(){//this makes the first on off switch be saved as false or true depending on the user's decision. also it keeps the value safe after a new load of the document
	if (localStorage.getItem("publicProfile") == "false"){
		localStorage.setItem("publicProfile", true);
	} else if (localStorage.getItem("publicProfile") == "true" && $("input:checked + .slider")[1] || $("input:checked + .slider")[0] == $(".slider.round.two")[0]){
		localStorage.setItem("publicProfile", false);
	}
});



$("select").click(function(){//this saves the selection of the timezone selected
	if( $('select').val() != "placeholder"){
		localStorage.setItem("timeZone", $('select').val());
	}
});
