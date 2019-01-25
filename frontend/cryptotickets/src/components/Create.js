import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import FileBase64 from 'react-file-base64';
import Web3 from 'web3';
import api from '../api/api.json';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const uuidv1 = require('uuid/v1');
const web3 = new Web3(Web3.givenProvider);





const Create = ()=>{

    console.log("endpoint", api.endpoints[0].add);

    const [spinner, setSpinner] = useState(false);
    const [form, setValues] = useState({
        event_id: uuidv1(),
        wallet: window.web3.eth.defaultAccount,
        form_image: '',
        img_preview:'',
        img_name: '',
        event_name: '',
        event_category: '',
        start_date: new Date(),
        end_date: '',
        start_time: '00:00',
        end_time: "00:00",
        event_type: '',
        event_address_line_1: '',
        event_address_line_2: '',
        country: 'United States',
        city: '',
        state: '',
        zip_code: '',
        description_about: '',
        description_organizer: '',
        ticket_type:''
    });



    const updateField = e=>{
        
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });

        

    }
    

    const resetForm = ()=>{
        setValues({
            event_id: uuidv1(),
            wallet: window.web3.eth.defaultAccount,
            form_image: '',
            img_preview:'',
            img_name: '',
            event_name: '',
            event_category: '',
            start_date: new Date(),
            end_date: '',
            start_time: '00:00',
            end_time: "00:00",
            event_type: '',
            event_address_line_1: '',
            event_address_line_2: '',
            country: 'United States',
            city: '',
            state: '',
            zip_code: '',
            description_about: '',
            description_organizer: '',
            ticket_type:''
        })
    }

    const handleStartDateChange = date=>{
        setValues({
            ...form,
            "start_date":date
        })
    }

    const handleEndDateChange = date=>{
        setValues({
            ...form,
            "end_date":date
        })
    }

    const handleImageUpload = e=>{
        const file = e.target.files[0];

    }

    const getFiles = files=>{
        const img_data = files[0];
        const type = files[0].type;
        const img_name = files[0].name;

        const base64 = img_data.base64.substring(23);
        
        const img_preview = URL.createObjectURL(files[0].file);

        if(type !== "image/jpeg"){
            return false;
            //show error//
        }

        setValues({
            ...form,
            form_image: base64,
            img_preview,
            img_name
        })
    }

    const createEvent = ()=>{
       
       if(form.form_image&&
        form.event_name&&
        form.event_category&&
        form.start_date&&
        form.end_date&&
        form.start_time&&
        form.end_time&&
        form.event_type&&
        form.event_address_line_1&&
        form.event_address_line_2&&
        form.country&&
        form.city&&
        form.state&&
        form.zip_code&&
        form.description_about&&
        form.description_organizer&&
        form.ticket_type&&
        form.event_category){
            setSpinner(true);
            fetch(api.server + api.endpoints[0].add, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transformData(form))

            })
            .then(response=>response.json()).then(data=>{
                 alert("your event can now be found at:" + data.body);
                 resetForm();
                 setSpinner(false);
            })
        }else{
            console.log("form", form);
            alert("Please fill all the fields");
        }

       
    }


    const transformData = (data)=>{

        const address = data.event_address_line_1 + ", "+data.event_address_line_2+", "+data.city+", "+data.state+", "+data.zip+", "+data.country;

        
        const rawBody = {
            "id":data.event_id,
            "wallet": data.wallet,
            "metadata":{
                "attributes":[
                    {
                        "trait_type":"Category",
                        "value":data.event_category
                    },
                    {
                        "trait_type":"Ticket Type",
                        "value":data.ticket_type
                    },
                    {
                        "trait_type":"Start Date",
                        "value":data.start_date.toDateString()
                    },
                    {
                        "trait_type":"Start Time",
                        "value":data.start_time
                    },
                    {
                        "trait_type":"End Date",
                        "value":data.end_date.toDateString()
                    },
                    {
                        "trait_type":"End Time",
                        "value":data.end_time
                    },
                    {
                        "trait_type":"Event Type",
                        "value":data.event_type
                    },
                    {
                        "trait_type":"Location",
                        "value":address
                    },
                    {
                        "trait_type":"About the Organizer",
                        "value":data.description_organizer
                    }
                ], 
                "name":data.event_name,
                "description":data.description_about
            },
            "image":data.form_image,
            "category":data.event_category
           
        }

        return rawBody;
    }


    if(spinner){
        return (
            <div className="create_event_form">
                <div className="loading_dialog">
                    <FontAwesomeIcon icon="spinner" className="fa-spin"/>
                    Creating the event...
                </div>
            </div>
        )
    }else{
        return (
        
            <div className="create_event_form">
                 
                 <div className="left_form">
                     {
                         form.img_preview ? (
                             <div className="form_image">
                                 <img src={form.img_preview}/>
                             </div>
                         ):(
     
                             <div className="form_image">
                                 <label className="custom_file_upload">
                                     <FileBase64 multiple={true} onDone={getFiles}/>
                                     Upload image
                                 </label>
                             </div>
                         )
                     }
                 
                 </div>
                 <div className="right_form">
                     <h2>Create an event</h2>
                     <h3>Event Details</h3>
                     <div className="form_input_group">
                         <strong>Event ID</strong>
                         <input name="event_id" value={form.event_id} disabled/>
                     </div>
                     <div className="form_input_group">
                         <strong>Event Name</strong>
                         <input name="event_name" type="text" value={form.event_name} onChange={updateField} placeholder={"Event Name"}/>
                     </div>
                     <div className="form_input_group">
                         <strong>Category</strong>
                         <select value={form.event_category} name="event_category" onChange={updateField}>
                             <option value="">Choose an Option</option>
                             <option value="Health & Fitness">Health & Fitness</option>
                             <option value="Festivals">Festivals</option>
                         </select>
                     </div>
                     <div className="form_input_group_many">
                         <div className="form_input_group horizontal"> 
                             <strong>Start Date</strong>
                             <div className="form_input_subgroup">
                                 <DatePicker name="start_date" selected={form.start_date} onChange={handleStartDateChange}/>
                                 <input type="time" name="start_time" value={form.start_time} onChange={updateField}/>
                             </div>
                         </div>
                         <div className="form_input_group horizontal"> 
                             <strong>End Date</strong>
                             <div className="form_input_subgroup">
                                 <DatePicker name="end_date" selected={form.end_date} onChange={handleEndDateChange}/>
                                 <input type="time" name="end_time" value={form.end_time} onChange={updateField}/>
                             </div>
                         </div>
                     </div>
                     <div className="form_input_group">
                         <strong>Event Type</strong>
                         <select value={form.event_type} name="event_type" onChange={updateField}>
                             <option value="">Choose an Option</option>
                             <option value="on-site">On-Site</option>
                             <option value="online">Online</option>
                         </select>
                     </div>
                     <div className="form_input_group">
                         <strong>Enter Location Address</strong>
                         <input name="event_address_line_1" type="text" value={form.event_address_line_1} onChange={updateField} placeholder={"Address line 1"}/>
                         <input name="event_address_line_2" type="text" value={form.event_address_line_2} onChange={updateField} placeholder={"Address line 2"}/>
                         <select value={form.country} name="country" onChange={updateField}>
                             <option value="United States">United States</option>
                         </select>
                         <div className="form_input_group_many">
                             <input type="text" name="city" value={form.city} onChange={updateField} placeholder={"City"}/>
                             <select value={form.state} name="state" onChange={updateField}>
                                 <option value="">State</option>
                                 <option value="florida">Florida</option>
                             </select>
                             <input type="text" name="zip_code" value={form.zip_code} onChange={updateField} placeholder={"Zip"}/>
                         </div>
                     </div>
                     <div className="form_input_group">
                         <h3>Descriptions</h3>
                         <strong>About the event</strong>
                         <textarea name="description_about" className="textarea" value={form.description_about} onChange={updateField} placeholder={"Talk about the event, talk about what people will take away from it, and share your event's itinerary"}>
     
                         </textarea>
                         <strong>About the organizer</strong>
                         <textarea name="description_organizer" className="textarea" value={form.description_organizer} onChange={updateField} placeHolder={"Tell people a little bit about the organizer, their background, their goals and more."}>
     
                         </textarea>
                     </div>
                     <div className="form_input_group">
                         <strong>Ticket Type</strong>
                         <select value={form.ticket_type} name="ticket_type" onChange={updateField}>
                             <option value="">Choose an Option</option>
                             <option value="General Admission">General Admission</option>
                             <option value="VIP">VIP</option>
                         </select>
                     </div>
                     <div className="form_input_group">
                         <strong>Wallet ID</strong>
                         <input type="text" name="wallet" value={form.wallet} disabled/>
                     </div>
                     <button className="form_button_submit" type="submit" onClick={createEvent}>
                         Create event
                     </button>
                 </div>
     
            </div>
         )
    }
   

    
}

export default Create;