

(function($) {
    /* "use strict" */
	
 var dlabChartlist = function(){
	
	var screenWidth = $(window).width();
	//let draw = Chart.controllers.line.__super__.draw; //draw shadow
	
	var NewCustomers = function(){
		var options = {
		  series: [
			{
				name: 'Net Profit',
				data: [100,300, 100, 400, 200, 400],
				/* radius: 30,	 */
			}, 				
		],
			chart: {
			type: 'area',
			height: 50,
			width: 100,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
			
		},
		
		colors:['var(--primary)'],
		dataLabels: {
		  enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
		  show: true,
		  width: 3,
		  curve:'smooth',
		  colors:['var(--primary)'],
		},
		
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
			normal: {
				filter: {
					type: 'none',
					value: 0
				}
			},
			hover: {
				filter: {
					type: 'none',
					value: 0
				}
			},
			active: {
				allowMultipleDataPointsSelection: false,
				filter: {
					type: 'none',
					value: 0
				}
			}
		},
		x: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		y: {
			show: false,
		},
		fill: {
			type: 'gradient',
			gradient: {
				colorStops : [
					{
						offset: 0,
						color: 'var(--primary)',
						opacity: 1
					},
					{
						offset: 0.3,
						color: 'var(--primary)',
						opacity: .4
					},
					{
						offset: 100,
						color: 'var(--primary)',
						opacity: 0
					}
				]
			}
		},
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		},
		responsive: [{
			breakpoint: 1400,
			options: {
				chart : {
					width :70,
					height:40,
				}
			},
		}]
		};

		var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers"), options);
		chartBar1.render();
	 
	}
	var NewCustomers1 = function(){
		var options = {
		  series: [
			{
				name: 'Net Profit',
				data: [100,300, 200, 400, 100, 400],
				/* radius: 30,	 */
			}, 				
		],
			chart: {
			type: 'area',
			height: 50,
			width: 100,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
			
		},
		
		colors:['#0E8A74'],
		dataLabels: {
		  enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
		  show: true,
		  width: 3,
		  curve:'smooth',
		  colors:['#145650'],
		},
		
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
		x: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		y: {
			show: false,
		},
		fill: {
			type: 'gradient',
			gradient: {
				colorStops : [
					{
						offset: 0,
						color: '#0E8A74',
						opacity: 1
					},
					{
						offset: 0.3,
						color: '#0E8A74',
						opacity: .4
					},
					{
						offset: 100,
						color: '#0E8A74',
						opacity: 0
					}
				]
			}
		},
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		},
		responsive: [{
			breakpoint: 1400,
			options: {
				chart : {
					width :70,
					height:40,
				}
			},
		}]
		};

		var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers1"), options);
		chartBar1.render();
	 
	}
	var NewCustomers2 = function(){
		var options = {
		  series: [
			{
				name: 'Net Profit',
				data: [100,200, 100, 300, 200, 400],
				/* radius: 30,	 */
			}, 				
		],
			chart: {
			type: 'area',
			height: 50,
			width: 100,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
			
		},
		
		colors:['#0E8A74'],
		dataLabels: {
		  enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
		  show: true,
		  width: 3,
		  curve:'smooth',
		  colors:['#3385D6'],
		},
		
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
		x: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		y: {
			show: false,
		},
		fill: {
			type: 'gradient',
			gradient: {
				colorStops : [
					{
						offset: 0,
						color: '#3385D6',
						opacity: 1
					},
					{
						offset: 0.3,
						color: '#3385D6',
						opacity: .4
					},
					{
						offset: 100,
						color: '#3385D6',
						opacity: 0
					}
				]
			}
		},
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		},
		responsive: [{
			breakpoint: 1400,
			options: {
				chart : {
					width :70,
					height:40,
				}
			},
		}]
		};

		var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers2"), options);
		chartBar1.render();
	 
	}
	var NewCustomers3 = function(){
		var options = {
		  series: [
			{
				name: 'Net Profit',
				data: [100,200, 100, 300, 200, 400],
				/* radius: 30,	 */
			}, 				
		],
			chart: {
			type: 'area',
			height: 50,
			width: 100,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false
			},
			sparkline: {
				enabled: true
			}
			
		},
		
		colors:['#0E8A74'],
		dataLabels: {
		  enabled: false,
		},

		legend: {
			show: false,
		},
		stroke: {
		  show: true,
		  width: 3,
		  curve:'smooth',
		  colors:['#B723AD'],
		},
		
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0

			}
		},
		states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
		x: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		y: {
			show: false,
		},
		fill: {
			type: 'gradient',
			gradient: {
				colorStops : [
					{
						offset: 0,
						color: '#B723AD',
						opacity: 1
					},
					{
						offset: 0.3,
						color: '#B723AD',
						opacity: .4
					},
					{
						offset: 100,
						color: '#B723AD',
						opacity: 0
					}
				]
			}
		},
		tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		},
		responsive: [{
			breakpoint: 1400,
			options: {
				chart : {
					width :70,
					height:40,
				}
			},
		}]
		};

		var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers3"), options);
		chartBar1.render();
	 
	}
	var activityChart = function(){
		
		var options = {
			series: [{
				name: 'Application Sent',
				data: [40, 60, 50, 65, 40, 65, 45 ,56 , 45, 60]
			}, {
				name: 'Interviews',
				data: [30, 27, 38, 35, 30, 35, 20 ,35 , 30, 40]
			}, {
				name: 'Rejected',
				data: [20, 25, 28, 20, 25, 28, 35 ,25 , 20, 30]
			}],
			chart: {
				height: 300,
				type: 'area',
				toolbar:{
					show:false
				},
			},
		  	colors:["#35c556","#3f4cfe","#f34040"],
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth',
				width:5,
			},
			legend:{
				show:false
			},
			grid:{
				show:true,
				strokeDashArray: 6,
				borderColor: 'var(--border)',
			},
			yaxis: {
				labels: {
				style: {
					colors: 'var(--text)',
					fontSize: '13px',
					fontFamily: 'Poppins',
					fontWeight: 400
					
				},
				formatter: function (value) {
					return value;
				}
				},
			},
			xaxis: {
				categories: ["Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
				labels:{
						style: {
						colors: 'var(--text)',
						fontSize: '13px',
						fontFamily: 'Poppins',
						fontWeight: 400
						
					},
				},
				axisTicks : {
					show : false
				},
				axisBorder : {
					show : false
				},
			},
			fill:{
				type:'gradient',
				gradient: {
					colorStops:[ 
						[
						  {
							offset: 0,
							color: '#35c556',
							opacity: .2
						  },
						  {
							offset: 50,
							color: '#35c556',
							opacity: 0
						  },
						  {
							offset: 100,
							color: '#35c556',
							opacity: 0
						  }
						],
						[
						  {
							offset: 0,
							color: '#3f4cfe',
							opacity: .2
						  },
						  {
							offset: 50,
							color: '#3f4cfe',
							opacity: 0
						  },
						  {
							offset: 100,
							color: '#3f4cfe',
							opacity: 0
						  }
						],
						[
						  {
							offset: 0,
							color: '#f34040',
							opacity: .2
						  },
						  {
							offset: 50,
							color: '#f34040',
							opacity: 0
						  },
						  {
							offset: 100,
							color: '#f34040',
							opacity: 0
						  }
						]
					]
				},
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				},
			},
			responsive: [{
				breakpoint: 575,
				options: {
					chart : {
						height:200,
					},
					stroke :{
						width : 3,
					},
					yaxis: {
						labels:{
							style: {
								fontSize: '11px',
							},
						},
					},
					xaxis: {
						labels:{
							style: {
								fontSize: '11px',
							},
						},
					},
				},
			}]
		};
  
		var chart = new ApexCharts(document.querySelector("#vacancyChart"), options);
		chart.render();

		$(".vacany-tabs .nav-link").on('click',function(){
			var seriesType = $(this).attr('data-series');
			var data1 = [];
			var data2 = [];
			var data3 = [];
			switch(seriesType) {
				case "Daily":
					data1 = [60, 40, 50, 45, 60, 45, 35 ,56 , 45, 60];
					data2 = [20, 35, 25, 35, 30, 20, 20 ,35 , 25, 40];
					data3 = [10, 25, 30, 20, 25, 15, 35 ,20 , 20, 30];
					break;
				case "Weekly":
					data1 = [55, 35, 45, 35, 55, 45, 35 ,60 , 40, 55];
					data2 = [35, 30, 40, 25, 44, 50, 20 ,35 , 30, 40];
					data3 = [20, 20, 15, 10, 25, 28, 20 ,25 , 20, 30];
					break;
				case "Monthly":
					data1 = [40, 60, 50, 65, 40, 65, 45 ,56 , 45, 60];
					data2 = [30, 27, 38, 35, 30, 35, 20 ,35 , 30, 40];
					data3 = [20, 25, 28, 20, 25, 28, 35 ,25 , 20, 30];
					break;
				default:
					data1 = [40, 60, 50, 65, 40, 65, 45 ,56 , 45, 60];
					data2 = [30, 27, 38, 35, 30, 35, 20 ,35 , 30, 40];
					data3 = [20, 25, 28, 20, 25, 28, 35 ,25 , 20, 30];
			}
			chart.updateSeries([
				{
					name: "Application Sent",
					data: data1
				},{
					name: 'Interviews',
					data: data2
				},{
					name: 'Rejected',
					data: data3
				}
			]);
		})

		
	}
	var activityBar1 = function(){
		var options = {
			series: [{
				name: 'Net Profit',
				data: [50, 40, 55, 25, 45, 40, 35, 55, 50,25,42,35,50]
			}],
			chart: {
				type: 'bar',
				height: 280,
				toolbar : {
					show : false
				},
			},
			plotOptions: {
				bar: {
			  		horizontal: false,
			  		columnWidth: '35%',
			  		endingShape: 'rounded'
				},
		  	},
		  	dataLabels: {
				enabled: false
		  	},
			colors : ['var(--primary)'],
		  	stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
		  	},
		  	xaxis: {
				categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09','10','11','12','13'],
				labels:{
					style: {
						colors: 'var(--text)',
						fontSize: '13px',
						fontFamily: 'Poppins',
						fontWeight: 400
						
					},
				},
				axisTicks : {
					show : false
				},
				axisBorder : {
					show : false
				},
		  	},
			yaxis: {
				labels: {
				style: {
					colors: 'var(--text)',
					fontSize: '13px',
					fontFamily: 'Poppins',
					fontWeight: 400
					
				},
				formatter: function (value) {
					return value;
				}
				},
			},
			grid:{
				show:true,
				strokeDashArray: 6,
				borderColor: 'var(--border)',
			},
			fill: {
				opacity: 1
			},
		};
  
		var chart = new ApexCharts(document.querySelector("#activity1"), options);
		chart.render();

		$(".chart-tab .nav-link").on('click',function(){
			var seriesType = $(this).attr('data-series');
			var data = [];
			switch(seriesType) {
				case "Daily":
					data = [60, 40, 50, 45, 60, 45, 35 ,56, 45, 60, 36, 45, 60];
					break;
				case "Weekly":
					data = [55, 35, 45, 35, 55, 45, 35 ,60, 40, 55, 45, 25, 45];
					break;
				case "Monthly":
					data = [50, 40, 55, 25, 45, 40, 35, 55, 50, 25, 42, 35, 50];
					break;
				default:
					data = [50, 40, 55, 25, 45, 40, 35, 55, 50, 25, 42, 35, 50];
			}
			chart.updateSeries([
				{
					name: 'Net Profit',
					data: data
				}
			]);
		})


	}
	var pieChart1 = function(){
		 var options = {
          series: [90, 68, 85],
          chart: {
          type: 'donut',
		  height:220
        },
		dataLabels:{
			enabled: false
		},
		stroke: {
          width: 0,
        },
		colors:['#1D92DF', '#4754CB', '#D55BC1'],
		legend: {
              position: 'bottom',
			  show:false
            },
        responsive: [{
          breakpoint: 1400,
          options: {
           chart: {
			  height:200
			},
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#pieChart1"), options);
        chart.render();
    
	}
	
	
	
	var donutChart = function(){
		$("span.donut").peity("donut", {
			width: "100",
			height: "100"
		});
	}
	
 
	/* Function ============ */
		return {
			init:function(){
			},
			
			
			load:function(){
				NewCustomers();
				NewCustomers1();
				NewCustomers2();
				NewCustomers3();
				activityChart();
				activityBar1();
				pieChart1();
				donutChart();
				
			},
			
			resize:function(){
			}
		}
	
	}();

	
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dlabChartlist.load();
		}, 1000); 
		
	});

     

})(jQuery);