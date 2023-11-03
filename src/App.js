import './App.css';
import AddDataForm from './AddDataForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteFormData } from './Redux/formDataSlice';
function App() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData.formData);
  const [isOpen,setIsOpen] = useState(false)
  const [isEditOpen,setIsEditOpen] = useState(false)
  const [editIndex,setEditIndex] = useState()
  const handleDialogShow=()=>{
    setIsOpen(!isOpen)
  }
  const handleEdit=(index)=>{
    setEditIndex(index)
    setIsEditOpen(!isEditOpen)
  }
  const handleDelet = (index) => {
    dispatch(deleteFormData(index))
  };
    return (
      <>
        <div className="App">
          <div className="add-new-button">
            <button className="blue-button" onClick={handleDialogShow}>
              Add New
            </button>
          </div>
          <div className="Table-div">
            <table>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>DOB</th>
                <th>Salary</th>
                <th>Joining Date</th>
                <th>Relieving Date</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              {formData.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{val.Name}</td>
                    <td>{val.DOB}</td>
                    <td>{val.Salary}</td>
                    <td>{val.JoiningDate}</td>
                    <td>{val.RelievingDate}</td>
                    <td>{val.Contact}</td>
                    <td ><div className={val.RelievingDate ?'inactive':'active'}>{val.RelievingDate ? "Inactive":"Active"}</div></td>
                    <td>
                      <div className="action-button">
                        <button className="Edit" onClick={() => handleEdit(key)}>
                          Edit
                        </button>
                        <button className="Delete" onClick={() => handleDelet(key)}>Delet</button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        {<AddDataForm isOpen={isOpen} setIsOpen={setIsOpen} name="add" />}
        {isEditOpen && <AddDataForm isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} name="edit" editIndex={editIndex} />}
      </>
    );
}
 
export default App;
