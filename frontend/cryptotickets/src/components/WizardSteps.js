import React from 'react';

const  WizardSteps = (props) => {


	return(
		<aside className="steps_container">
			{
				props.tabs.map((step, index)=>{

				return ((props.currentTab === index) ? 
					<div className="step_section_active">
						<span className="active_dot"></span>
						<span>{step}</span>
					</div> : 
					<div className="step_section">
						<span className={(props.currentTab > index) ? "visited_dot" : "dot"}></span>
						<span className="step_label" onClick={()=>{props.goToTab(index)}}>{step}</span>
					</div>
					)}			
				)
			}
		</aside>
	)
	
}

export default WizardSteps;