import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './FormDialog.css'; // Import your CSS file.
import {addFormData,editFormData} from './Redux/formDataSlice';
import { useSelector } from 'react-redux';


const FormDialog = ({ isOpen, onClose,setIsOpen,setData ,data,isEditOpen,setIsEditOpen,name,editIndex}) => {
  const formDataFromRedux = useSelector((state) => state.formData.formData);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    "Name": name==="edit"? formDataFromRedux[editIndex].Name:'',
    "DOB": name==="edit"? formDataFromRedux[editIndex].DOB:'',
    "Salary": name==="edit"? formDataFromRedux[editIndex].Salary:'',
    "JoiningDate": name==="edit"? formDataFromRedux[editIndex].JoiningDate:'',
    "RelievingDate": name==="edit"? formDataFromRedux[editIndex].RelievingDate:'',
    "Contact":name==="edit"? formDataFromRedux[editIndex].Contact:'',
    "Status":name==="edit"? formDataFromRedux[editIndex].Status:'',

  });

  const handleDialogClose =() => {
    name === "edit" ? setIsEditOpen(!isEditOpen) : setIsOpen(!isOpen);
  }

  const handleFormSubmit = (e) => {
    name === "add" ? setIsOpen(!isOpen) : setIsEditOpen(!isEditOpen);
    e.preventDefault();
    name === "add"
      ? dispatch(addFormData(formData))
      : dispatch(editFormData({ index: editIndex, formData: formData }));;
    setFormData({
      "Name": '',
      "DOB": '',
      "Salary": '',
      "JoiningDate": '',
      "RelievingDate": '',
      "Contact":"",
      "Status":""
  
    })
  };

  return (
    <div className={`form-dialog ${name ==="edit" ?isEditOpen ? 'open' : '':isOpen?'open':''}`}>
      <div className="dialog-content">
        <button className='close' onClick={handleDialogClose}>
          X
        </button>
        <h2>{name==="add" ? "Add": "Edit"} Form Dialog</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.Name}
              onChange={(e) =>
                setFormData({ ...formData, Name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Date of Birth (DOB)</label>
            <input
              type="date"
              name="dob"
              value={formData.DOB}
              onChange={(e) =>
                setFormData({ ...formData, DOB: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              type="number"
              name="age"
              value={formData.Salary}
              onChange={(e) =>
                setFormData({ ...formData, Salary: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Joinig Date</label>
            <input
              type="date"
              name="JoiningDate"
              value={formData.JoiningDate}
              onChange={(e) =>
                setFormData({ ...formData,JoiningDate : e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Relieving Date</label>
            <input
              type="date"
              name="RelievingDate"
              value={formData.RelievingDate}
              onChange={(e) =>
                setFormData({ ...formData, RelievingDate: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              type="number"
              name="Contact"
              value={formData.Contact}
              onChange={(e) =>
                setFormData({ ...formData, Contact: e.target.value })
              }
            />
          </div>
          <button type="submit" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormDialog;

