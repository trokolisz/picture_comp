// src/pages/TeamDashboard.js
import React, { useState } from 'react';
import { storage } from '../firebase/firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const TeamDashboard = () => {
   const [file, setFile] = useState(null);

   const uploadPhoto = async () => {
      if (!file) return;

      const storageRef = ref(storage, `images/teamA/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      alert(`File uploaded! URL: ${url}`);
   };

   return (
      <div>
         <h1>Team Dashboard</h1>
         <input type="file" onChange={(e) => setFile(e.target.files[0])} />
         <button onClick={uploadPhoto}>Upload Photo</button>
      </div>
   );
};

export default TeamDashboard;
