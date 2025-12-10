import { useEffect, useState } from "react";
import useApi from '../../hooks/useApi'
import { Loading } from "../../components";

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
      <ul>
        {data && data.map((user) => (
          <li key={user.id} className="card w-96 bg-base-100 card-lg shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{user.name}</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </li>
        ))};
      </ul>
    </div>
  )
}

export default Home