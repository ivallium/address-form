import React from 'react';
import { Address, Time } from '../../types/types';

function AddressDisplay(props: { address: Address, time: Time, onRemove: () => void }) {

    const {address, time} = props;
    return (
        <div className={"address-display"}>
            <div>
                <p>{`${address.firstLine}, ${address.secondLine}, ${address.city}, ${address.postcode}`}</p>
                <img width={10} src={"/assets/delete.png"} alt={"delete"} onClick={props.onRemove}/>
            </div>
            <p> Time at address: {`${time.years} ${time.years === "1" ? "year" : "years"}, ${time.months} ${time.months === "1" ? "month" : "months"}`}</p>
        </div>
    );
}

export default AddressDisplay;

