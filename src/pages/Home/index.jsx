import { useEffect, useState } from "react";
import useApi from '../../hooks/useApi'
import { Loading } from "../../components";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);
  const { get, error, loading } = useApi();
  useEffect(() => {
   get().then((data)=>setData(data.data));
  }, []);
  if(loading){
    return <Loading/>
  }
  return (
    <div className="container">
      <div className="w-full flex items-center">
        <Link className="btn btn-primary flex ml-auto" to="/create-user">Create User</Link>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data && data.map((user) => (
          <li key={user.id} className="card  bg-base-100 card-lg shadow-md">
            <div className="card-body">
              <h2 className="card-title">Name: {user.name}</h2>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              <div className="justify-end card-actions">
                <Link className="w-full btn btn-info" to={`/user-info/${user.id}`}>User sozlamalari</Link>
              </div>
            </div>
          </li>
        ))};
      </ul>
    </div>
  )
}

export default Home