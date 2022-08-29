import React from "react";
import { CustomButton } from "./Dialog";
import "./DeleteDialog.scss"

const DeleteDialog = ({hideDialog, deleteItemHandler}) => {

    return (
        <div className="delete-dialog">
            <div className="delete-dialog-header">Delete Item?</div>
            <div className="delete-dialog-content">
                Are you sure you want to delete this item? This can not be undone.
            </div>
            <div className="delete-dialog-actions">
                <CustomButton value="Cancel" type="cacel" clickHandler={hideDialog} style={{marginRight: "5px"}}/>
                <CustomButton value="Delete" type="active" clickHandler={deleteItemHandler} />
            </div>
        </div>
    )
}

export default DeleteDialog