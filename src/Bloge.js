import React, { useEffect, useState } from 'react';

const Bloge = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonserver-3.onrender.com/user");
        const data = await response.json();
        setUserData(data);
        setLoading(false); // Set loading to false after data fetching is complete
      } catch (error) {
        console.log(error);
        setLoading(false); // In case of error, still remove loading indicator
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (index) => {
    try {
      const response = await fetch(`https://jsonserver-3.onrender.com/user/${userData[index].id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        const updatedUserData = userData.filter((user, i) => i !== index);
        setUserData(updatedUserData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      {loading && <h1>Loading...</h1>}
      <div style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}>
       
        {!loading && userData.map((user, index) => (
          <div className='blogeContainer' key={index}>
            <div className='NameAndButton'>
              <h3>{user.Name}</h3>
              <button className='deleteButton' onClick={() => { handleDelete(index) }}>Delete</button>
            </div>
            <hr />
            <h4><span style={{ color: "#9c6a6a" }}>TITLE</span> : &nbsp;  {user.Age}</h4>
            <h4> <span style={{ color: " #9c6a6a" }}>BLOG</span> : </h4>
            <p>{user.Class}</p> <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Bloge;
