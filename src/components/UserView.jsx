import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LayoutDefault from '../layouts/Default';
function UserView() {
    const params = useParams();
    const [userList, setUserList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // On Load
        getUsers();
        console.log("welcome to userview");
    }, []);

    let getUsers = async () => {
        try {
            const user = await axios.get(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`);
            setUserList(user.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setLoading(false);
        }
    }

    return (
        <>
            <LayoutDefault>
                <div>UserView - {params.id}</div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">UserView</h6>
                    </div>
                    <div className="card-body">
                        {
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>E-Mail</th>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Country</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>E-mail</th>
                                                <th>City</th>
                                                <th>State</th>
                                                <th>Country</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>{userList.id}</td>
                                                <td> {userList.username} </td>
                                                <td>{userList.email}</td>
                                                <td>{userList.city}</td>
                                                <td>{userList.state}</td>
                                                <td>{userList.country}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                        }
                    </div>
                </div>
            </LayoutDefault>
        </>
    )
}

export default UserView
