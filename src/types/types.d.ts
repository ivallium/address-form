// Fields for the form

export interface Address {
    firstLine: string;
    secondLine: string;
    city: string;
    postcode?: string;
}

export interface Time {
    years: string;
    months: string
}

export interface AddressEntry {
    address: Address;
    time: Time;
}

// Fields for the props of components

export interface TimeSelectProps {
    year: string;
    month: string;
    setMonths: Dispatch<SetStateAction<string>>;
    setYears: Dispatch<SetStateAction<string>>;
}

export interface AddressSelectProps { 
    postcode: string;
    addAddress: (firstLine: string, secondLine: string, city: string, postcode: string) => void;
}

export interface AddressDisplayProps { 
    address: Address;
    time: Time;
    onRemove: () => void
}


export interface AddressInputProps {
    address: Address;
    postcode: string;
    addAddress: (firstLine: string, secondLine: string, city: string, postcode: string) => void;
}

export interface PostcodeInputProps {
    postcode: string | undefined;
    onSearch: Dispatch<SetStateAction<string | undefined>>;
}