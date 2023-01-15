import {useParams, useSearchParams} from "react-router-dom";

export default function Add(){
    let [searchParams, setSearchParams] = useSearchParams();
    let x = searchParams.get("x");
    let y = searchParams.get("y");
    return ( <p>{parseInt(x)+parseInt(y)}</p>)
}