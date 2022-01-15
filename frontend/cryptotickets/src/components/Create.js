import React, {useState, useEffect} from 'react';
import Wizard from './Wizard';
import WizardSteps from './WizardSteps';
import api from '../api/api.json';

import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

const uuidv1 = require('uuid/v1');




const Create = (props)=>{



    const wizard = ['About', 'Details', 'Organizer','Summary'];


    const getAccounts = (callback)=> {
       web3.eth.getAccounts((error,result) => {
           if (error) {
               setValues({...form, wallet_error: error})
           } else {
               callback(result);
           }
       });
     }

      useEffect(()=>{
        getAccounts((result)=>{
            setValues({...form, wallet: result[0]});
        })

      }, []);


     const [spinner, setSpinner] = useState(false);


     const [wizardTab, setCurrentTab] = useState({
        current: 0,
        errors: []
    });


     const [form, setValues] = useState({
        event_id: uuidv1(),
        wallet: props.wallet,
        form_image: '',
        img_preview:'',
        img_name: '',
        event_name: '',
        event_category: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        event_type: '',
        event_address_line_1: '',
        event_address_line_2: '',
        country: 'United States',
        city: '',
        state: '',
        zip_code: '',
        event_link: '',
        description_about: '',
        organizer_type: '',
        company_name:'',
        organizer_phone_num: '',
        organizer_email: '',
        first: '',
        last:'',
        ticket_type:''
    });



     const resetForm = ()=>{
        setValues({
            event_id: uuidv1(),
            wallet: props.wallet,
            form_image: '',
            img_preview:'',
            img_name: '',
            event_name: '',
            event_category: '',
            start_date: '',
            end_date: '',
            start_time: '',
            end_time: '',
            event_type: '',
            event_address_line_1: '',
            event_address_line_2: '',
            country: 'United States',
            city: '',
            state: '',
            zip_code: '',
            event_link: '',
            description_about: '',
            organizer_type: '',
            company_name:'', 
            organizer_phone_num: '',
            organizer_email: '',
            first:'',
            last:'',
            ticket_type:''
        })
    }


      const updateField = e=>{
        let errors = [e.target.name];
        setErrors(errors, wizardTab.currentTab, 'remove');
        setValues({
            ...form,
            [e.target.name]: e.target.value
        });

      }


      const handleStartDateChange = date=>{
        let errors = ['start_date'];

        setErrors(errors, wizardTab.current, 'remove');  
        setValues({
            ...form,
            "start_date":date
        })


      }


      const handleEndDateChange = date=>{
         let errors = ['end_date'];

        setErrors(errors, wizardTab.current, 'remove');  
        setValues({
            ...form,
            "end_date":date
        })
      }


    

     const nextTab = ()=> {
        let current = wizardTab.current + 1;
        let errors = [...wizardTab.errors]
        setCurrentTab({current, errors})
     }

     const prevTab = ()=> {
        let current = wizardTab.current - 1;
        let errors = [...wizardTab.errors]
        setCurrentTab({current, errors})
     }


     const goToTab = (index)=> {
      let errors = [...wizardTab.errors]
      setCurrentTab({current: index, errors});

     }

     const setErrors = (errors_collection, currentTab, action)=>{
         let errors = [...wizardTab.errors]
         
         switch(action){
            case 'add':
               errors_collection.forEach(item=>errors.push(item));
            break;
            case 'remove':
               errors_collection.forEach(item=>{
                  errors = errors.filter(subitem => (subitem !== item));
               })
            break;
         }
         
         setCurrentTab({...wizardTab, errors});

     }





    const handleImageUpload = e=>{
        const file = e.target.files[0];

    }

   const getImageDimensions = file=>{
        return new Promise (function(resolved, rejected) {
            var i = new Image();
            i.onload = ()=>{
                resolved({w: i.width, h:i.height})
            };

            i.src = file;
        })
    }



    async function getFiles(files){
        let errors = wizardTab.errors.filter(error=>(error !== 'image_format'));

        const img_data = files[0];
        const type = files[0].type;
        const img_name = files[0].name;

        const base64 = img_data.base64.substring(23);
        
        const img_preview = URL.createObjectURL(files[0].file);

        var dimensions = await getImageDimensions(files[0].base64);

         if(type !== "image/jpeg" || dimensions.w !== 350 || dimensions.h !== 350){
            
            errors.push('image_format');
            setValues({...form,
                        form_image: '',
                        img_preview:'',
                        img_name: ''
                     });
            return false;
        }

        
        setValues({
            ...form,
            form_image: base64,
            img_preview,
            img_name
        })
    }

    const createEvent = ()=>{
       /*
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

       */
    }



    const handleNext = (current)=>{

        if(errorHandler(current).length === 0)
            nextTab();
    }
    

    const handlePrev = (current)=>{
            prevTab();
    }


    const verifyForms = ()=>{
        props.tabs.every((tab,index)=>{
            if(errorHandler(index))
                return false;

            return true;
        })

    }

    const handleGoTo = (current)=>{
      
 
    }

    const errorHandler = (current) => {
        let errors = [...wizardTab.errors];
        switch(current) {
            case 0:
               console.log("here")
                let fields = [...errors[current]]; 
                if(!form.event_name && !fields.includes('event_name'))
                   fields.push('event_name');
                    //errors.push('event_name');
                
                if(!form.description_about && !fields['description_about'])
                    fields.push('description_about');
                     //errors.push('description_about');
                errors.push(fields);                  
                setErrors(errors, current, 'add');
            break;
            case 1:
                errors = [...wizardTab.errors];
                if(!form.start_date && !errors.includes('start_date'))
                    errors.push('start_date');                    
                if(!form.start_time && !errors.includes('start_time'))
                    errors.push('start_time');
                if(!form.end_date && !errors.includes('end_date'))
                    errors.push('end_date');
                if(!form.end_time && !errors.includes('end_time'))
                    errors.push('end_time');
                if(!form.event_type && !errors.includes('event_type'))
                    errors.push('event_type');
                if(form.event_type === 'on-site'){
                    if(!form.event_address_line_1 && !errors.includes('event_address_line_1'))
                        errors.push('event_address_line_1');
                    if(!form.event_address_line_2 && !errors.includes('event_address_line_2'))
                        errors.push('event_address_line_2');
                    if(!form.city && !errors.includes('city'))
                        errors.push('city');
                    if(!form.state && !errors.includes('state'))
                        errors.push('state');
                    if(!form.zip_code && !errors.includes('zip_code'))
                        errors.push('zip_code');


                } else {
                   if(!form.event_link && !errors.includes('event_link'))
                    errors.push('event_link');
                }

                console.log("errors before being pushed", errors);
                setErrors(errors, current, 'add');
            break;
            case 2:
                errors = [...wizardTab.errors];
                if(!form.organizer_type)
                    errors.push('organizer_type');
                if(form.organizer_type === 'org'){
                    if(!form.company_name)
                        errors.push('company_name');
                } 

                if(form.organizer_type === 'person'){
                    if(!form.first)
                        errors.push('first');
                    if(!form.last)
                        errors.push('last');
                }
                if(!form.organizer_phone_num)
                    errors.push('organizer_phone_num');
                if(!form.organizer_email)
                    errors.push('organizer_email');
                if(!form.wallet)
                    errors.push('wallet');
                setValues({...form, errors});

            break;
        }
        console.log("errors", errors);
        return errors;

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


    return(
        <div className="wizard_container">
            <h1>Follow the steps to create your event</h1>
            <WizardSteps tabs={wizard} currentTab={wizardTab.current} goToTab={goToTab} errors={wizardTab.errors}/>
            <Wizard  data={form}
                     currentTab={wizardTab.current}
                     updateField={updateField} 
                     handleNext={handleNext}
                     handleStartDateChange={handleStartDateChange}
                     handleEndDateChange={handleEndDateChange}
                     nextTab={nextTab} 
                     prevTab={prevTab} 
                     goToTab={goToTab} 
                     wallet={props.wallet} 
                     tabs={wizard} 
                     setErrors={setErrors} 
                     errors={wizardTab.errors}
                     spinner={spinner}/>
        </div>
    );
    
}

export default Create;