import React from 'react';
import DatePicker from "react-datepicker";
import LocationDetails from "./LocationDetails";
import FileBase64 from 'react-file-base64';



const Details = (props) => {

	console.log("props", props);

	return (
			<section className="create_event_form">
					<div className="form_input">
						<label className="input_label" >When is the event starting?</label>
						<DatePicker name="start_date" selected={props.data.start_date} onChange={props.handleStartDateChange} className={(props.errors.find(item => item === 'start_date')) ? "datetime_input_error" : "datetime_input"}/>
					</div>
					<div className="form_input">
						<label className="input_label">When time is this event starting?</label>
						<input type="time" name="start_time" value={props.data.start_time} onChange={props.updateField} className={(props.errors.find(item => item === 'start_time')) ? "input_error" : "input"}/>
					</div>
					<div className="form_input">
						<label className="input_label">When is it ending?</label>
						<DatePicker name="end_date" selected={props.data.end_date} onChange={props.handleEndDateChange} className={(props.errors.find(item => item === 'end_date')) ? "datetime_input_error" : "datetime_input"}/>
					</div>
					<div className="form_input">
						<label className="input_label">At what time?</label>
						<input type="time" name="end_time" value={props.data.end_time} onChange={props.updateField} className={(props.errors.find(item => item === 'end_time')) ? "input_error" : "input"}/>
					</div>
					<div className="form_input">
						<label className="input_label">is this an online event?</label>
						<select value={props.data.event_type} name="event_type" onChange={props.updateField} className={(props.errors.find(item => item === 'event_type')) ? "input_error_select" : "input_select"}>
                       <option value="">Choose an Option</option>
                       <option value="online">Yes</option>
                       <option value="on-site">No</option>
                  </select>
					</div>
					{(props.data.event_type) ? <LocationDetails data={props.data} updateField={props.updateField} errors={props.errors}/>:""}

					<div className="upload_button_container">
						<h3>Click to upload your event banner: (Note: Image dimensions must be 350px x 350px)</h3>
						<div className="image_upload_section">
	                  <label className="custom_file_upload">
	                      <FileBase64 multiple={true} onDone={props.getFiles}/>
	                      Upload
	                  </label>
	                  {(props.data.img_name) ? <span>{props.data.img_name}</span> : ""}
	                  {(props.errors.find(error => error === 'image_format')) ? <span className="error_text">Image format has to be JPG (350px x 350px)</span> : ""}
	               </div>
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
		)
		
}		

export default Details;