import { Icon } from '@iconify/react'
import useApi from '../../hooks/useApi';
import { Loading } from '../../components';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function CreateUser() {  
  const {error, loading, post} = useApi()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData);
    await post(newUser);
    toast.success("yangi foydalanuvchi qo'shildi")
    e.target.reset()
  };
  if(loading){
    return <Loading/>
  }
  return (
    <div className="container flex flex-col items-center">
      <Link className="btn btn-primary mb-10 self-start text-white" to="/">
      <Icon icon="ic:round-arrow-back" width="24" height="24" />
      Ortga
      </Link>
      <h1 className='text-2xl font-bold mb-8 text-center'>Yangi foydalanuvchi yaratish</h1>
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
   />
      </label>
      <button className='w-full btn btn-primary font-bold'>Yaratish</button>

      </form>
    </div>
  )
}

export default CreateUser
