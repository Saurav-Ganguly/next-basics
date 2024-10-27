import { redirect } from "next/navigation";

export default function Account() {
    //assume thhat profile info is null
    const userProfileInfo = null;   
    if(userProfileInfo === null) {
        redirect('/products/1?search=product1&randomvalue=abcd');
    }
}