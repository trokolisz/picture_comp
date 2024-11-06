// src/pages/AdminDashboard.js
import React from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const AdminDashboard = () => {
   const addCompetition = async () => {
      await addDoc(collection(db, 'competitions'), {
         startDate: "2024-03-15T00:00:00Z",
         endDate: "2024-03-22T00:00:00Z",
         judges: ["judge123", "judge456"],
         teams: []
      });
      alert("Competition added!");
   };

   return (
      <div>
         <h1>Admin Dashboard</h1>
         <button onClick={addCompetition}>Add Competition</button>
      </div>
   );
};

export default AdminDashboard;
