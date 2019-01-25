import React, {useEffect, useState} from 'react';
import api from '../api/api.json';
import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider);

const Browse = ()=>{


    const [events, setEvents] = useState();
    const [wallet, setWallet] = useState('');

     async function getAllEvents(){
       const response =  await fetch(api.server+api.endpoints[1].getWalletEvents + wallet);
       const json = await response.json();
       return JSON.parse(json.body).Items;
    }

    useEffect(()=>{
        setWallet(window.web3.eth.defaultAccount);
        if(wallet){
            /*console.log("here");
           fetch(api.server+api.endpoints[1].getWalletEvents + wallet).then(response=>
               response.json()
           ).then(data=> {
               const parsed = JSON.parse(data.body);
               const events_parsed = parsed.Items;
               //console.log("events", events);
               if(events && events_parsed){
                console.log("are events equal? ", events[0].metadata.attributes[0] === events_parsed[0].metadata.attributes[0]);
                console.log("events", events[0].metadata.attributes[0]);
                console.log("events_parsed", events_parsed[0].metadata.attributes[0])
                if( events[0].metadata.attributes[1] === events_parsed[0].metadata.attributes[1]){
                    console.log("bingo!")
                }else{
                    console.log("not bingo")
                }
               }
               /*console.log("are wallets equal?", wallet === window.web3.eth.defaultAccount);
               console.log("events", events[0].metadata.attributes[0]);
               console.log("events_parsed", events_parsed[0].metadata.attributes[0])
               setEvents(events_parsed);
           })

            /*const info = getAllEvents().then(data=>{
                setEvents(info);
                
            })*/
        }
        
    }, [events, wallet])
    return (
        <p></p>
    )
}

export default Browse;