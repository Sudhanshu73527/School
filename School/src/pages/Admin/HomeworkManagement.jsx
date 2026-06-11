import React,
{
 useState,
 useEffect
}
from "react";

import axios from "axios";

const HomeworkManagement = () => {

 const [homeworks,setHomeworks] =
 useState([]);

 const [formData,setFormData] =
 useState({
  className:"",
  subject:"",
  title:"",
  description:"",
  dueDate:"",
 });

 const [editingId,setEditingId] =
 useState(null);

 const API =
 "http://localhost:5000/api/homework";

 const fetchHomework =
 async () => {

  const res =
  await axios.get(API);

  setHomeworks(res.data);
 };

 useEffect(() => {
  fetchHomework();
 },[]);

 const handleChange =
 (e) => {
  setFormData({
   ...formData,
   [e.target.name]:
   e.target.value,
  });
 };

 const handleSubmit =
 async (e) => {

  e.preventDefault();

  if(editingId){

   await axios.put(
    `${API}/${editingId}`,
    formData
   );

  }else{

   await axios.post(
    API,
    formData
   );

  }

  setFormData({
   className:"",
   subject:"",
   title:"",
   description:"",
   dueDate:"",
  });

  setEditingId(null);

  fetchHomework();
 };

 const editHomework =
 (item) => {

  setEditingId(item._id);

  setFormData(item);
 };

 const deleteHomework =
 async (id) => {

  await axios.delete(
   `${API}/${id}`
  );

  fetchHomework();
 };

 return (
  <div className="p-8">

   <h1 className="text-3xl font-bold mb-8">
    Homework Management
   </h1>

   <form
    onSubmit={handleSubmit}
    className="bg-white p-6 rounded-xl shadow mb-8 space-y-4"
   >

    <input
     type="text"
     name="className"
     placeholder="Class 1"
     value={formData.className}
     onChange={handleChange}
     className="w-full border p-3 rounded"
    />

    <input
     type="text"
     name="subject"
     placeholder="English"
     value={formData.subject}
     onChange={handleChange}
     className="w-full border p-3 rounded"
    />

    <input
     type="text"
     name="title"
     placeholder="Homework Title"
     value={formData.title}
     onChange={handleChange}
     className="w-full border p-3 rounded"
    />

    <textarea
     name="description"
     placeholder="Homework Description"
     value={formData.description}
     onChange={handleChange}
     className="w-full border p-3 rounded"
    />

    <input
     type="text"
     name="dueDate"
     placeholder="10 June 2026"
     value={formData.dueDate}
     onChange={handleChange}
     className="w-full border p-3 rounded"
    />

    <button
     className="bg-green-600 text-white px-6 py-3 rounded"
    >
     {
      editingId
      ? "Update Homework"
      : "Add Homework"
     }
    </button>

   </form>

   <div className="space-y-4">

    {
     homeworks.map((item)=>(
      <div
       key={item._id}
       className="bg-white p-5 rounded-xl shadow"
      >

       <h3 className="font-bold">
        {item.title}
       </h3>

       <p>
        {item.className}
       </p>

       <p>
        {item.subject}
       </p>

       <div className="flex gap-3 mt-4">

        <button
         onClick={() =>
          editHomework(item)
         }
         className="bg-blue-500 text-white px-4 py-2 rounded"
        >
         Edit
        </button>

        <button
         onClick={() =>
          deleteHomework(item._id)
         }
         className="bg-red-500 text-white px-4 py-2 rounded"
        >
         Delete
        </button>

       </div>

      </div>
     ))
    }

   </div>

  </div>
 );
};

export default HomeworkManagement;