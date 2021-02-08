import React, { useEffect, useState } from 'react';
import { PostcodeInputProps } from '../../../types/types';
import { checkPostCode } from '../../../utility/utility';

// Takes the postcode from the props and stores it as internal "search" state until user enters/clicks
// then the global postcode state is updated so the search can start
function PostcodeInput(props: PostcodeInputProps) {

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
                <img alt={"search"} src="./assets/magnifying-glass.png" width={15} onClick={handleSearchPostcode}/>
            </div>
            <p>{error}</p>
        </>
    );
}

export default PostcodeInput;

