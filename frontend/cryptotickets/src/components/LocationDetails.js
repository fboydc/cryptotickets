import React from 'react';

const LocationDetails = (props)=>{


	return(
		(props.data.event_type === 'on-site') ?
		<div className="location_details_group">
			 <div className="form_input">
			 	<h3>Please provide an address</h3>
	             <label className="input_label">
	                <span>Address Line 1</span>
	             </label>
	             <input name="event_address_line_1" type="text" value={props.data.event_address_line_1} onChange={props.updateField} placeholder={"Address Line 1"} className={(props.errors.find(item => item === 'event_address_line_1')) ? "input_error" : "input"}/>
             </div> 
              <div className="form_input">
	             <label className="input_label">
	                <span>Address Line 2</span>
	             </label>
	             <input name="event_address_line_2" type="text" value={props.data.event_address_line_2} onChange={props.updateField} placeholder={"Address Line 2"} className={(props.errors.find(item => item === 'event_address_line_2')) ? "input_error" : "input"}/>
             </div>
             <div className="form_input">
	             <label className="input_label">
	                <span>City</span>
	             </label>
	             <input name="city" type="text" value={props.data.city} onChange={props.updateField} placeholder={"City"} className={(props.errors.find(item => item === 'city')) ? "input_error" : "input"}/>
             </div>
             <div className="form_input">
	             <label className="input_label">
	                <span>State</span>
	             </label>
	             <select value={props.data.state} name="state" onChange={props.updateField} className={(props.errors.find(item => item === 'state')) ? "input_error_select" : "input_select"}>
	             	<option value="">choose an option</option>
	             	<option value="florida">Florida</option>
	             </select>
             </div>
             <div className="form_input">
				<label className="input_label">
                    <span>zip</span>
                </label>
                <input name="zip_code" type="text" value={props.data.zip_code} onChange={props.updateField} placeholder={"zip code"} className={(props.errors.find(item => item === 'zip_code')) ? "input_error" : "input"}/>
             </div>     
        </div>
             : 
		<div className="location_details_group">
			<div className="form_input">
			 	<h3>Please provide a link for your event for your watchers to access:</h3>
	             <label className="input_label">
	                <span>Event URL</span>
	             </label>
	             <input name="event_link" type="text" value={props.data.event_link} onChange={props.updateField} placeholder={"Event Link"} className={(props.errors.find(item => item === 'event_link')) ? "input_error" : "input"}/>
             </div>
		</div>
	)
}


export default LocationDetails;