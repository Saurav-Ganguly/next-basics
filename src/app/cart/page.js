'use client'
import { usePathname, useSearchParams } from 'next/navigation';
export default function Cart() {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    console.log(pathName);
    console.log(searchParams);
    return <div>Cart Page : {pathName} || {searchParams.get('search')} || {searchParams.get('randomvalue')}</div>

}