import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function List() {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetchUsers() 
    },[])

    const fetchUsers = async () => {
        await axios.get(`http://localhost:8000/api/users`).then(({data})=>{
            setUsers(data)
        })
    }

    return (
      <div className="container">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/user/create"}>
                    Create User
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email Address</th>
                                    <th>Roles</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 && (
                                        users.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.name}</td>
                                                <td>{row.email}</td>                                                                                                
                                                <td>{row.roles}</td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}
