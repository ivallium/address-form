import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { checkPostCode } from '../../../utility/utility';

function PostcodeInput(props: { postcode: string | undefined, onSearch: Dispatch<SetStateAction<string | undefined>> }) {

    const [error, setError] = useState("");
    const [postcode, setPostcode] = useState(props.postcode);

    useEffect(() => {
        setPostcode(props.postcode)
    }, [props.postcode])

    const handleSearchPostcode = (): void => {
        if (checkPostCode(postcode)) {
            setError("");
            props.onSearch(postcode)
        } else {
            setError("This is an invalid postcode");
        }
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
          handleSearchPostcode()
        } 
      }

    return (
        <>
            <label>Postcode search</label>
            <div className="form-input">
                <input type={"text"} id={"postcode-input"} value={postcode} onChange={(e) => setPostcode(e.currentTarget.value.toUpperCase())} onKeyDown={handleKeyDown}/>
                <img alt={"search"} src="/assets/magnifying-glass.png" width={15} onClick={handleSearchPostcode}/>
            </div>
            <p>{error}</p>
        </>
    );
}

export default PostcodeInput;

