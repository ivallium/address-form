import React, { useEffect, useState } from 'react';
import { AddressEntry } from '../types/types';
import AddressDisplay from './address/AddressDisplay';
import AddressSelect from './address/AddressSelect';
import PostcodeInput from './address/postcode/PostcodeInput';
import TimeSelect from './time/TimeSelect';

function Form() {

    const [postcode, setPostcode] = useState<string | undefined>(undefined);
    const [addresses, setAddresses] = useState<AddressEntry[]>([]);
    const [years, setYears] = useState<string>("0")
    const [months, setMonths] = useState<string>("0")

    useEffect(() => {
        setPostcode("");
    }, [addresses])

    const handleAddAddress = (firstLine: string, secondLine: string, city: string, postcode: string) => {
        setAddresses([...addresses, { address: { firstLine, secondLine, city, postcode }, time: { years, months } }]);
        setPostcode("");
        setYears("0");
        setMonths("0");
    }

    const handleRemoveAddress = (index: number) => {
        setAddresses([...addresses.slice(0, index), ...addresses.slice(index + 1)])
    }


    return (
        <div className="background">
            <div className="search-container">
                <h3> Address Search </h3>
                <p>Please enter your address</p>
                <div className={"horizontal-bar"}></div>
                
                <div>
                    {
                        addresses.map((entry: AddressEntry, index: number) => {
                            return <AddressDisplay address={entry.address} time={entry.time} onRemove={() => handleRemoveAddress(index)}/>
                        })
                    }
                </div>
                

                <TimeSelect 
                    year={years} 
                    month={months}
                    setYears={setYears}
                    setMonths={setMonths}
                />

                <PostcodeInput
                    postcode={postcode} 
                    onSearch={setPostcode}
                />

                {
                    postcode && 

                    <AddressSelect 
                        postcode={postcode} 
                        addAddress={handleAddAddress}
                    />
                } 

            </div>
        </div>
    );
}

export default Form;
