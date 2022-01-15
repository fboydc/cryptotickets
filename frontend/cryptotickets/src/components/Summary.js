import React from 'react';


const Summary = (props)=>{

	return(
		<div className="wizard_container">
			{(props.data.errors.length > 0) ?
				<div className="summary_error_section">
					Fix errors before submitting
				</div>
				:
				""
			}


		</div>
	)
}

export default Summary;