import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import About from './About';
import Details from './Details';
import Organizer from './Organizer';
import Summary from './Summary';





const Wizard = (props)=> {





    if(props.spinner){
        return (
            <div className="create_event_form">
                <div className="loading_dialog">
                    <FontAwesomeIcon icon="spinner" className="fa-spin"/>
                    Creating the event...
                </div>
            </div>
        )
    }else{
        console.log("props.currentTab", props);
        switch(props.currentTab) {
            case 0 :
                console.log("returning 0");
                return (
                	<About data={props.data} updateField={props.updateField} handleNext={props.handleNext} tabNum={props.currentTab} errors={props.errors} />
                	);
            break;
            case 1:
                    
                return (
                    <Details data={props.data} updateField={props.updateField} handleNext={props.handleNext} handlePrev={props.handlePrev} tabNum={props.currentTab} errors={props.errors} handleStartDateChange={props.handleStartDateChange} handleEndDateChange={props.handleEndDateChange} getFiles={props.getFiles}/>
                    );
            break
            case 2:

                return (
                    <Organizer data={props.data} updateField={props.updateField} handleNext={props.handleNext} handlePrev={props.handlePrev} tabNum={props.currentTab}/>
                )
            break;
            case 3:

                return (
                    <Summary data={props.data}/>
                )
            break;

      }



 }
}

export default Wizard;
