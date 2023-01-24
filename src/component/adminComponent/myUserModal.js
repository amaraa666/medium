

export default function AddUserMod({ init, addUsrModal, setAddUsrModal, addUser, addmyUser, setaddMyUser, getDta }) {

    function save(e) {
        e.preventDefault()
        fetch('https://medium-api-psi.vercel.app/api/users', {
            method: 'POST',
            headers: { 'Content-Type': "application/json", },
            body: JSON.stringify(addmyUser),
        })
            .then((res) => res.json())
            .then((mydata) => {
                console.log(mydata.result)
                getDta();
                setaddMyUser(init)
                window.alert('amjilttai')
            })
            .catch(err => {
                console.log(err)
            })
        setAddUsrModal(!addUsrModal)
    }

    return (
        <>
            <div className="modal adUserMod container-fluid justify-content-center align-items-center" onClick={addUser} style={{ display: addUsrModal ? 'flex' : 'none' }}>
                <div className="col-6 bg-light py-5 rounded-2 d-flex justify-content-center" onClick={(e) => e.stopPropagation()}>
                    <form className="col-8">
                        <div className="mb-3">
                            <label for="frstName" className="form-label">firstname</label>
                            <input type="text" className="form-control" id="frstName" required value={addmyUser.firstName} onChange={(e) => setaddMyUser({ ...addmyUser, firstName: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="lastname">lastname</label>
                            <input type="text" className="form-control" id="lastname" required value={addmyUser.lastName} onChange={(e) => setaddMyUser({ ...addmyUser, lastName: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label for="Password" className="form-label">Password</label>
                            <input type="text" className="form-control" id="Password" required value={addmyUser.password} onChange={(e) => setaddMyUser({ ...addmyUser, password: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="organization">organization</label>
                            <input type="text" className="form-control" id="organization" required value={addmyUser.organization} onChange={(e) => setaddMyUser({ ...addmyUser, organization: e.target.value })} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={save}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}