import React, { useEffect, useState } from 'react';
import { AddressInputProps } from '../../types/types';

function AddressInput(props: AddressInputProps) {

    const [firstLine, setFirstLine] = useState(props.address.firstLine);
    const [secondLine, setSecondLine] = useState(props.address.secondLine);
    const [city, setCity] = useState(props.address.city);
    const [postcode, setPostcode] = useState(props.postcode);

    useEffect(() => {
        setFirstLine(props.address.firstLine);
        setSecondLine(props.address.secondLine);
        setCity(props.address.city);
        setPostcode(props.postcode);
    }, [props])

    const handleAddAddress = (event: any) => {
        event.preventDefault();
        console.log(event.target);
        props.addAddress(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value)
    }

    return (
        <form onSubmit={(event) => handleAddAddress(event)}>
            <label>Address line 1 *</label>
            <div className="form-input">
                <input type={"text"} value={firstLine} required onChange={(e) => setFirstLine(e.currentTarget.value)}/>
            </div>

            <label>Address line 2</label>
            <div className="form-input">
                <input type={"text"} value={secondLine} onChange={(e) => setSecondLine(e.currentTarget.value)}/>
            </div>

            <label>City *</label>
            <div className="form-input">
                <input type={"text"} value={city} required onChange={(e) => setCity(e.currentTarget.value)}/>
            </div>

            <label>Postcode *</label>
            <div className="form-input">
                <input type={"text"} value={postcode} required onChange={(e) => setPostcode(e.currentTarget.value)}/>
            </div>

            <div className={"submit-div"}>
                <input type="submit" id={"submit-button"} value="Add address"/>
            </div>

        </form>
    );
}

export default AddressInput;

