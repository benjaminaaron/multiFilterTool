//CONFIG.JS

var scopeTableConfig = [	
	{ // STAGE 1
		'jobcount' : {
			'label' : {
				'title' : '',
				'id' : 'jobcount_label',
				'text' : 'Job count',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'jobcount_value',
				'text' : '*',
				'class' : ''				
			}
		},
	},
	{ // STAGE 2
		'distinctUserIds' : {
			'label' : {
				'title' : '',
				'id' : 'distinctUserIds_label',
				'text' : '# of diff. User Ids',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'distinctUserIds_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'distinctProjectIds' : {
			'label' : {
				'title' : '',
				'id' : 'distinctProjectIds_label',
				'text' : '# of diff. Project Ids',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'distinctProjectIds_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'earliestStartDate' : {
			'label' : {
				'title' : '',
				'id' : 'earliestStartDate_label',
				'text' : 'earliest start time',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'earliestStartDate_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'latestStartDate' : {
			'label' : {
				'title' : '',
				'id' : 'latestStartDate_label',
				'text' : 'latest start time',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'latestStartDate_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'shortestDuration' : {
			'label' : {
				'title' : '',
				'id' : 'shortestDuration_label',
				'text' : 'shortest duration',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'shortestDuration_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'longestDuration' : {
			'label' : {
				'title' : '',
				'id' : 'longestDuration_label',
				'text' : 'longest duration',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'longestDuration_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'minCores' : {
			'label' : {
				'title' : '',
				'id' : 'minCores_label',
				'text' : 'min cores',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'minCores_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'maxCores' : {
			'label' : {
				'title' : '',
				'id' : 'maxCores_label',
				'text' : 'max cores',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'maxCores_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'minNodes' : {
			'label' : {
				'title' : '',
				'id' : 'minNodes_label',
				'text' : 'min nodes',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'minNodes_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'maxNodes' : {
			'label' : {
				'title' : '',
				'id' : 'maxNodes_label',
				'text' : 'max nodes',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'maxNodes_value',
				'text' : '*',
				'class' : ''				
			}		
		},
		'maxNumberOfSteps' : {
			'label' : {
				'title' : '',
				'id' : 'maxNumberOfSteps_label',
				'text' : 'max number of steps',
				'class' : ''
			}, 
			'value' : {
				'title' : '',
				'id' : 'maxNumberOfSteps_value',
				'text' : '*',
				'class' : ''				
			}		
		}
	}
];


var filterTableConfig = 
	{
		'jobIds' : 	[
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'jobIds_label',
				'text' : 'Job Id(s) String',
				'class' : ''	
			},
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'jobIds_value',
				'value' : '',
				'class' : ''
			}
		],
		'userIds' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'userIds_label',
				'text' : 'User Id(s)',
				'class' : ''	
			},
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'userIds_value',
				'value' : '',
				'class' : ''
			}
		],
		'projectIds' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'projectIds_label',
				'text' : 'Project Id(s)',
				'class' : ''	
			},
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'projectIds_value',
				'value' : '',
				'class' : ''
			}
		],
		'startDateLowerBound' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'startDateLowerBound_label',
				'text' : 'StartTime lower bound',
				'class' : ''	
			},
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'startDateLowerBound_value',
				'value' : '',
				'class' : ''
			}
		],
		'startDateUpperBound' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'startDateUpperBound_label',
				'text' : 'StartTime upper bound',
				'class' : ''	
			},
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'startDateUpperBound_value',
				'value' : '',
				'class' : ''
			}
		],
		'wallclock' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'wallclock_label',
				'text' : 'Wallclock',
				'class' : ''	
			},
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'wallclock_value',
				'value' : '',
				'class' : ''
			}
		],
		'includeInterim' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'includeInterim_label',
				'text' : 'Include interim jobs',
				'class' : ''	
			},
			{
				'tag' : 'input',
				'type' : 'checkbox',
				'title' : '',
				//'checked' : 'checked',
				'id' : 'includeInterim_value',
				'class' : ''
			}
		],
		'includeNoperfdataJobs' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'includeNoperfdataJobs_label',
				'text' : 'Include noperfdata jobs',
				'class' : ''	
			},
			{
				'tag' : 'input',
				'type' : 'checkbox',
				'title' : '',
				//'checked' : 'checked',
				'id' : 'includeNoperfdataJobs_value',
				'class' : ''
			}
		],
		'cores' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'cores_label',
				'text' : 'Cores',
				'class' : ''	
			},			
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'minCores_value',
				'value' : '',
				'class' : '',
				'size' : '5'
			}, 
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'maxCores_value',
				'value' : '',
				'class' : '',
				'size' : '5'
			}
		],
		'nodes' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'nodes_label',
				'text' : 'Nodes',
				'class' : ''	
			},		
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'minNodes_value',
				'value' : '',
				'class' : '',
				'size' : '5'
			}, 
			{
				'tag' : 'input',
				'type' : 'text',
				'title' : '',
				'id' : 'maxNodes_value',
				'value' : '',
				'class' : '',
				'size' : '5'
			}
		],
		'batchDomain' : [
			{
				'tag' : 'label',
				'title' : '',
				'id' : 'batchDomain_label',
				'text' : 'Batch Domain:',
				'class' : ''
			},
			{
				'tag' : 'input',
				'type' : 'checkbox',
				'title' : '',
				'checked' : 'checked',
				'id' : 'batchDomain1_value',
				'class' : ''
			}, 
			{
				'tag' : 'input',
				'type' : 'checkbox',
				'title' : '',
				'checked' : 'checked',
				'id' : 'batchDomain2_value',
				'class' : ''
			}
		]
	};

