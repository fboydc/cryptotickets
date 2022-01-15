import React from 'react';



const About = (props)=>  {

                console.log("props are", props);

            return(
                    <section className="create_event_form">
                            <div className="form_input">
                                 <label className="input_label">
                                    <span>Let's give your event a name</span>
                                 </label>
                                 <input name="event_name" type="text" value={props.data.event_name} onChange={props.updateField} placeholder={"Event Name"} className={(props.errors.find(item => item === 'event_name')) ? "input_error" : "input"}/>
                            </div>
                            <div className="form_input">
                                <label className="input_label">What is this event about?</label>
                                <textarea name="description_about" className={(props.errors.find(item => item === 'description_about')) ? "textarea_error" : "textarea"} value={props.data.description_about} onChange={props.updateField} placeholder={"Talk about the event, talk about what people will take away from it, and share your event's itinerary"}>
                                </textarea>
                            </div>
                            <div className="wizard_button_container">
                                <button className="form_button_wizard_disabled" disabled={true}>
                                    prev
                                </button>
                                <button className="form_button_wizard" onClick={()=>{props.handleNext(props.tabNum)}}>
                                    next
                                </button>
                            </div>
                     </section>
        );


        
	
}

export default About;