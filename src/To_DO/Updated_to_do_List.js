import React, { useState } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddIcon from '@material-ui/icons/Add';
import Note from '.  /Notes';
import EditIcon from '@material-ui/icons/Edit';
import { ForumTwoTone } from '@material-ui/icons';
const Updated_to_do_List = () => {
    const [c_text, update_text] = useState('');
    const [show, update_show] = useState(get_arr());
    const[bt_state,u_state]=useState('Add');
    const[ed_state,u_e_state]=useState('');
    const[Search_text,update_search]=useState('');
    const[SearcH_arr,up_S_a]=useState([]);

    function get_arr() {
        let arr = [];
        for (let i = 0; localStorage.length > i; i++) {
            let key = localStorage.key(i);
            let it = localStorage.getItem(key);
            arr.push({ [key]: it })
        }
        for (let item of arr) {
            for (let item2 in item) {
                // console.log(item[item2])
            }
        }
        return arr;

    }

    function Add() {

        let ran_str = ''
        let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        for (let i = 0; 8 > i; i++) {
            let ran_num = Math.round(Math.random() * 25);
            ran_str += alphabet[ran_num]
        }

        localStorage.setItem(ran_str, c_text)
        update_show(get_arr());
        update_text('');




    }

    function update(e) {
        update_text(e.target.value);

    }
    function Clear() {
        localStorage.clear();
        update_show(get_arr);
    }
    function Delete(e) {

        localStorage.removeItem(e)

        update_show(get_arr)

    }
    function Edit(e) {
        let ed=localStorage.getItem(e);
        update_text(ed);
        u_state('Edit')
        u_e_state(e)

    }

function Add_Edit(){
    if(bt_state=='Add'){
return <AddIcon onClick={Add} style={{color:"limegreen"}}/>

    }
    else{
  return <EditIcon onClick={Confirm} style={{color:"gold"}}/>

    }

}
function Confirm(){
    
    
    localStorage.setItem(ed_state,c_text)
    update_show(get_arr());
    u_state('Add')
    update_text('')
}



//Search Funcnationality
function Update_S(e){
    up_S_a([]);
    update_search(e.target.value)

for(let item of show){
    for(let item2 in item){
let tx=item[item2]
if(tx.includes(e.target.value)){
    up_S_a((arr)=>{
        return[...arr,{[item2]:tx}]
    })
}
else{
    
}
    }
    
}



}






    return (
        <>
        <nav>
            <h2>ToDO App</h2>
            <input type='text' placeholder='Saerch The Notes' onChange={Update_S} />
        </nav>
        <div className='body'>
            <div className='main_div'>
                <div className="logo">
                    <ListAltIcon style={{ transform: "scale(2)" }} />


                </div>
                <h3 style={{ marginTop: "20px" }}>Add your List Here</h3>
                <div className='input'>
                    <input type="text" placeholder="Add" onChange={update} value={c_text} />
                   <Add_Edit/>
                </div>

                <button onClick={Clear}>Clear Items</button>
                <div className='items'>
                    {Search_text.length>0?
                    SearcH_arr.map((el, index) => {
                        for (let item in el) {

                            return (<>
                                <Note key={item} text={el[item]} id={item} Edit={Edit} Delete={Delete} />
                            </>)
                        }
                    })
                    
                   :show.map((el, index) => {
                        for (let item in el) {

                            return (<>
                                <Note key={item} text={el[item]} id={item} Edit={Edit} Delete={Delete} />
                            </>)
                    
                    }
                   


                    })}



                </div>
            </div>
        </div>
        </>
    )
}
export default Updated_to_do_List;