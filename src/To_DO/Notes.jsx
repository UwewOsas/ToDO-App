import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Notes(props) {
    return (<>
        <div className='notes'>
            <div>
                <h3>{props.text}</h3>
            </div>

            <div>
                <EditIcon onClick={function(){
            props.Edit(props.id)
        }}/>
                <DeleteIcon onClick={function(){
            props.Delete(props.id)
        }}/>

            </div>
        </div>
    
    </>);
}

export default Notes;
