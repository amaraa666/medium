

import { useState } from "react";
import AddUserMod from "./myUserModal";
import { useEffect } from "react";


export default function AdUSers() {
    const [myUserAd, setMyUserAd] = useState([]);

    function getDta() {
        fetch('https://medium-api-psi.vercel.app/api/users')
            .then((res) => res.json())
            .then((data) => {
                setMyUserAd(data.result);
                // console.log(data.result);
            })
    }

    useEffect(() => {
        getDta();
    }, [])

    const [addUsrModal, setAddUsrModal] = useState(false);

    const addUser = () => {
        setAddUsrModal(!addUsrModal);
    }

    const init = {
        firstName: '',
        lastName: '',
        password: '',
        organization: '',
    }
    const [addmyUser, setaddMyUser] = useState(init);


    function deleteUser(id) {
        fetch(`https://medium-api-psi.vercel.app/api/users?id=${id}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                getDta();
            })
    }

    function editUser(){

    }
    return (
        <>
            <AddUserMod init={init} addmyUser={addmyUser} setaddMyUser={setaddMyUser} addUsrModal={addUsrModal} setAddUsrModal={setAddUsrModal} addUser={addUser} getDta={getDta} />
            <div className="container-fluid py-3">
                <div className="btn bg-dark text-light" onClick={addUser}>Add new user</div>
            </div>
            <div className="container-fluid">
                <table className="table fs-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">firstName</th>
                            <th scope="col">lastName</th>
                            <th scope="col">Password</th>
                            <th scope="col">organization</th>
                            <th scope="col">Үйлдэл</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myUserAd.map((el, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.firstName}</td>
                                    <td>{el.lastName}</td>
                                    <td>{el.password}</td>
                                    <td>{el.organization}</td>
                                    <td>
                                        <div className="d-flex gap-3">
                                            <div className="btn bg-danger text-light" onClick={() => deleteUser(el._id)}>delete</div>
                                            <div className="btn bg-warning text-light" onClick={()=> editUser(el._id)}>edit</div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>

                </table>
            </div>
        </>
    )

} 