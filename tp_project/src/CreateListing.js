
import React, {useState} from "react";



function CreateListing(){

    const [selected, setSelected] = useState('');
    
    const changeSelectOptionHandler = (props) => {
        setSelected(props.target.value);
    }
    return(
        <div>
            <form>
                <label>What are you listing? <input type={'text'} placeholder={'item'}/> </label>
                <label>What are you looking to do? </label>
            </form>
            <h3>Create a Listing</h3>
            <h5>What are you listing?</h5>
            <input type={'text'} placeholder={'item'}/>
            <h5>What are you looking to do?</h5>
            <select>
                <option>Sell it</option>
                <option>Loan it out</option>
            </select>

        </div>
    )
}

export default CreateListing