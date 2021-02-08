import React, { ChangeEvent, useEffect, useState } from 'react';
import { API_KEY } from '../../constants';
import { formatAddress } from '../../utility/utility';
import AddressInput from './AddressInput';

function AddressSelect(props: { postcode: string, addAddress: (firstLine: string, secondLine: string, city: string, postcode: string) => void }) {

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
            <label>Address</label>
            
            <div className="form-input">
                <select name="address" id="address" placeholder="Select your address" value={selected} onChange={(event: ChangeEvent<HTMLSelectElement>) => setSelected(event.target.value)}>
                    <option value="-1">Select your address</option>
                    {addressOptions.map((address: string, index: number) => (
                        <option key={`option-${index}`} value={address}>{address.replace(/ ,/g, "")}</option>
                    ))}
                </select>
                <img width={15} alt={"chevron-down"} src="/assets/chevron-down.png"/>
            </div>

            <img className="double-chev" alt={"double-chevron"} width={8} src={"/assets/double-chevron.png"}/>

            { selected !== "-1" && 
                <AddressInput 
                    address={formatAddress(selected)} 
                    postcode={props.postcode} 
                    addAddress={props.addAddress}
                />
            }

            { error !== "" && <p>{error}</p>}
        
        </>

    );
}

export default AddressSelect;

