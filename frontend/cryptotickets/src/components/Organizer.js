import React from 'react';




const Organizer = (props)=> {

		console.log("props in organizer", props);

		return(
			<section className="create_event_form">
			    <div className="section_info">
					<h3>Event Organizer</h3>
					<p>
					  <strong>Important:</strong> Please note that this event is bounded to your current Metamask wallet. Please be aware that whichever wallet you currently have selected will be the owner of the event contract. 
					  The event contract is the master contract that allows the minting of new tickets as well as the collection of the tickets funds once the event has been completed. PLEASE NOTE/DO NOT 
					  LOSE THIS ACCOUNT! otherwise, you will be unable to collect your funds.
					</p>
				</div>
				<div className="form_input">
					<label className="input_label">Organizer Type</label>
					<select value={props.data.organizer_type} name="organizer_type" onChange={props.updateField} className={(props.data.errors.find(item => item === 'organizer_type')) ? "input_error_select" : "input_select"}>
	                    <option value="">Choose an Option</option>
	                    <option value="org">Organization</option>
	                    <option value="person">Person</option>
	                </select>
	            </div>
	            {
	            	(props.data.organizer_type) ? 

	            	 (props.data.organizer_type === 'org') ? 
	            	 	<div className="form_input">
	            	 		<label className="input_label">
                                 <span>Company Name</span>
                            </label>
                            <input name="company_name" type="text" value={props.data.company_name} onChange={props.updateField} placeholder={"Company Name"} className={(props.data.errors.find(item => item === 'company_name')) ? "input_error" : "input"}/>
	            	 	</div>
	            	 	   : 
	            	 	<div className="form_input">
	            	 		<label className="input_label">
                                 <span>First Name</span>
                            </label>
                            <input name="first" type="text" value={props.data.first} onChange={props.updateField} placeholder={"First"} className={(props.data.errors.find(item => item === 'first')) ? "input_error" : "input"}/>
                            <label className="input_label">
                                 <span>Last Name</span>
                            </label>
                            <input name="last" type="text" value={props.data.last} onChange={props.updateField} placeholder={"Last"} className={(props.data.errors.find(item => item === 'last')) ? "input_error" : "input"}/>
	            	 	</div>

	           		 :

	           		 ""

                	 
	            }
	            <div className="form_input">
	            	<label className="input_label">
                        <span>Phone Number</span>
                    </label>
                    <input name="organizer_phone_num" type="tel" value={props.data.organizer_phone_num} onChange={props.updateField} placeholder={"Phone Number"} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className={(props.data.errors.find(item => item === 'organizer_phone_num')) ? "input_error" : "input"}/>
	            </div>
	            <div className="form_input">
	            	<label className="input_label">
                        <span>Email</span>
                    </label>
                    <input name="organizer_email" value={props.data.organizer_email} onChange={props.updateField} placeholder={"john.doe@domain.com"} className={(props.data.errors.find(item => item === 'organizer_email')) ? "input_error" : "input"}/>
	            </div>
	            <div className="form_input">
	            	<label className="input_label">
                        <span>Wallet</span>
                    </label>
                    <input name="wallet" value={props.data.wallet} onChange={props.updateField} className={(props.data.errors.find(item => item === 'wallet')) ? "input_error" : "input"} disabled/>
	            </div>
	            <div className="wizard_button_container">
                   	<button className="form_button_wizard" onClick={()=>{props.handlePrev()}}>
                       	prev
                  	</button>
                    <button className="form_button_wizard" onClick={()=>{props.handleNext(props.tabNum)}}>
                        next
                    </button>
               	</div>

			</section>
		);


}

export default Organizer;