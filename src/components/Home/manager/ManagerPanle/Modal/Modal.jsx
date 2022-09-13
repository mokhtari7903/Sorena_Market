import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddModal from './AddModal/AddModal';
import EditModal from './EditModal/EditModal';
function Modal() {
    const {Modal} = useParams()
    
    const navigate = useNavigate()
    return ( 
        <>
        
        {Modal === "Edit" &&< EditModal/>}
        {Modal === "Add" && <AddModal/>}
        {Modal === "Delete" && <div>
            <p>
            ایا این کالا حذف شود؟
            </p>

            </div>}
        
        </>
     );
}

export default Modal;