import { useEffect, useState } from "react"
import { Link,  useNavigate, useParams } from "react-router-dom"
import useApi from "../../hooks/useApi"
import { Icon } from "@iconify/react"
import { Loading } from "../../components"
import { toast } from "react-toastify"

function UserInfo() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState(null)
    const {loading, get, patch, deleteUser} = useApi()
    useEffect(()=>{
    get("/"+id).then(setData)
    },[]);
    console.log(data)
        const handleSubmit = async(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target);
            const newUser = Object.fromEntries(formData);
            await patch(newUser, "/"+data.id);
            setData({...newUser, id: data.id})
            toast.success("Foydalanuvchi o'zgartirildi!")
            e.target.reset()        
    };
  const handleDelete = async()=>{
      await deleteUser("/"+id)
      toast.warning("Foydalanuvchi o'chirib yuborildi")
    navigate("/")
    }
    if(loading){
      return <Loading/>
    }

  return (
    <div className="container flex flex-col items-center">
    <Link className="btn btn-primary mb-10 self-start text-white" to="/">
      <Icon icon="ic:round-arrow-back" width="24" height="24" />
      Ortga
      </Link>
      <h1 className='text-2xl font-bold mb-8 text-center'>Foydalanuvchini sozlamalari</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-[320px]">
              <label className="  input validator">
          <Icon icon="mi:user" width="24" height="24" />
        <input
          className="w-full"
          name='name'
          type="text"
          required
          placeholder="Username"
          pattern="[A-Za-z][A-Za-z0-9\-]*"
          minLength="3"
          maxLength="30"
          defaultValue={data?.name}
        />
            </label>
      <p className="validator-hint">
        Ism 3 ta harfdan ko'p bo'lishi kerak!
      </p>
            <label className=" mb-8 input validator">
          <Icon icon="mingcute:birthday-2-line" width="24" height="24" />
        <input
          className="w-full"
          name='age'
          type="number"
          required
          placeholder="Age"
          defaultValue={data?.age}
         />
            </label>
            <label className=" mb-8 input validator">
          <Icon icon="mi:email" width="24" height="24" />
        <input
          className="w-full"
          name='email'
          type="email"
          required
          placeholder="Email"
          defaultValue={data?.email}
         />
            </label>
           <div className="flex gap-2">
            <button className='w-[calc(50%-4px)] btn btn-primary font-bold'>O'zgartirish</button>
            <button onClick={handleDelete} className='w-[calc(50%-4px)] btn btn-error font-bold'>O'chirish</button>
            </div>      
            </form>
    </div>
  )
}

export default UserInfo