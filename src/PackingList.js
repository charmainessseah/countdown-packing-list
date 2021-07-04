import React, {useEffect, useState} from 'react';
import DeleteIcon from '@material-ui/icons/DeleteRounded'

function PackingList() {

    const packingList = [
        {
            thing : "phone", 
            id : Number(new Date().getTime()), 
            packed : false
        }, 
    ];

    const [item, setItem] = useState("")
    const [list, setList] = useState(packingList);

    const handleChange = (e) => {
        setItem(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item !== "") {
            let copy = [...list];
            let idNum = Number(new Date().getTime())
            copy.push({thing : item, id : idNum, packed : false});
            setList(copy);
            setItem("");
            localStorage.setItem("packingList", JSON.stringify(copy));
        } else {
            alert("please enter a valid item");
        }
    }

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log("clicked")
    //     let itemID = e.currentTarget.id;
    //     let updatedList = list.map(item => {
    //         return item.id === Number(itemID) ? {...list, packed: !item.packed} : {...list}
    //     });
    //     setList(updatedList);
    //     console.log(updatedList);
    // }
    const handleClick = (e) => {
        console.log("click")
        e.preventDefault();
        let itemID = e.currentTarget.id;
        console.log("ID: " + itemID);
        let copy = [...list];
        let updatedList = copy.filter(item => {
            return item.id != itemID; 
        });
        setList(updatedList);
        localStorage.setItem("packingList", JSON.stringify(updatedList));
    }

    useEffect(()=> {
        if (localStorage.getItem("packingList") != null) {
            console.log("use effect");
            setList(JSON.parse(localStorage.getItem("packingList")));
        }
    }, []);
    

    return(
        <div className="packing-list">

            <h2 className="packing-list-header">THINGS TO PACK:</h2>

            <form onSubmit={handleSubmit}>
                <input className="input-box" value={item} type="text" onChange={handleChange} placeholder="enter item here"></input>
                <button className="input-button">ADD ITEM</button>
            </form>

            {/* {list.map(item => <h2  className="item">{item["thing"]}<button id={(item.id)} onClick={handleClick}>remove item</button></h2>)} */}

            <div className="item-container">
                {list.map(item => <h2  className="item">{item["thing"]}<DeleteIcon className="delete-icon" id={(item.id)} onClick={handleClick}>remove item</DeleteIcon></h2>)}
            </div>
            

           


           
        </div>
    )
}

export default PackingList;