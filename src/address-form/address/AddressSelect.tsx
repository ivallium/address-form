import React, { ChangeEvent, useEffect, useState } from 'react';
import { API_KEY } from '../../constants';
import { AddressSelectProps } from '../../types/types';
import { formatAddress } from '../../utility/utility';
import AddressInput from './AddressInput';

// Takes in the postcode as props and immediately searches for the results using fetch
// Fetch is in useEffect so that whenever the post code is updated the search completes again

// Only displays the fields for the address if an address has been selected
function AddressSelect(props: AddressSelectProps) {

    const [addressOptions, setAddressOptions] = useState([]);
    const [selected, setSelected] = useState("-1");
    const [error, setError] = useState<null | string>(null);

    useEffect(() => {
        async function updateComponent() {

            const fetchAddresses = async () => {
                fetch(`https://api.getAddress.io/find/${props.postcode}?api-key=${API_KEY}`)
                    .then((res) => res.json())
                    .then((data) => { setError(null); setAddressOptions(data.addresses); })
                    .catch(() => setError("There was an error finding the postcode."))
            }

            await fetchAddresses();
        }
        updateComponent();
    }, [props.postcode])


    return (
        <>
            <label>{"Address"}</label>
            
            <div className="form-input">
                <select name="address" id="address" placeholder="Select your address" value={selected} onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelected(event.target.value)}>
                    <option value="-1">Select your address</option>
                    {addressOptions.map((address: string, index: number) => (
                        <option key={`option-${index}`} value={address}>{address.replace(/ ,/g, "")}</option>
                    ))}
                </select>
                <img width={15} alt={"chevron-down"} src="./assets/chevron-down.png"/>
            </div>


            { selected !== "-1" && 
                <>
                    <img className="double-chev" alt={"double-chevron"} width={8} src={"./assets/double-chevron.png"}/>

                    <AddressInput 
                        address={formatAddress(selected)} 
                        postcode={props.postcode} 
                        addAddress={props.addAddress}
                    />
                </>
            }

            { error !== "" && <p>{error}</p>}
        
        </>

    );
}

export default AddressSelect;

