import { useEffect, useState } from "react";

function Home()  {
    const [users, setUsers] = useState([])

useEffect(() =>
fetch ("http://localhost:8000/vegetables")
.then(r => r.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error))
)

};

export default Home;