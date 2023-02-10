import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Crime(props) {
  const {id,user,crimes,parish,mayor,town,fatalities,sCrimes,uCrimes,money,total,highFatalities,notes} = props.crime
  console.log(props.crime);

  const fetchDelete = (id) =>{
    fetch(`http://localhost:3000/crimes/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json()) // or res.json()
    .then(res => toast.error(`Deleted: ${id}`,{position: "top-center"}))
    
  }

  const handleDelete = (id) =>{
    const access = prompt(`Are you sure You want to delete ${id} (yes/no)`)
    if(access==="yes"){
      fetchDelete(id)
    }
    else{
      toast.success("NOT DELETED")
    }
  }
  return (
    <tr className='hover'>
      <th className='text-center m-0'>{id}</th>
    
      <td className='text-center'>{user}</td>
      <td className='text-center'>{crimes}</td>
      <td className='text-center'>{parish}</td>
      <td className='text-center'>{mayor}</td>
      <td className='text-center'>{town}</td>
      <td className='text-center'>{fatalities}</td>
      <td className='text-center'>{sCrimes}</td>
      <td className='text-center'>{uCrimes}</td>
      <td className='text-center'>{money}</td>
      <td className='text-center'>{total}</td>
      <td className='text-center'>{highFatalities}</td>
      <td className='text-center'>{notes}</td>
      <th className='text-center'>
        <Link to={`/crimes/${id}`}><button className='m-0.5 btn btn-outline btn-xs btn-success'>Show</button></Link>
        <button onClick={() => handleDelete(id)} className='m-0.5 btn btn-outline btn-xs btn-error'>Delete</button>
      </th>
    </tr>
  )
}

export default Crime