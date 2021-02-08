export interface Address {
    firstLine: string;
    secondLine: string;
    city: string;
    postcode: string;
}

export interface Time {
    years: string;
    months: string
}

export interface AddressEntry {
    address: Address;
    time: Time;
}