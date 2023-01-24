import { BarChart } from "./BarChart"

export default function MainAd({ myDataAd }) {
    const myCate = []
    myDataAd.filter((e) => {
        if (!myCate.includes(e.category)) {
            myCate.push(e.category)
        }
    })
    console.log(myCate)


    function DeleteMyNews() {

    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row py-3">
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-title fs-4 text-warning">Users</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-person fs-3"></i>
                                        <h3>{myDataAd.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-title fs-4 text-warning">News</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-newspaper fs-3"></i>
                                        <h3>{myDataAd.length}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-title fs-4 text-warning">Category</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-card-checklist fs-3"></i>
                                        <h3>{myCate.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <BarChart myData={myDataAd} />
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Body</th>
                                            <th scope="col">Үйлдэл</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myDataAd.map(({ _id, title, isTrending, category }, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{title}</td>
                                                    <td>{category}</td>
                                                    <td>
                                                        {isTrending ? (<span className="badge bg-success">yes</span>) : (<span className="badge bg-danger">no</span>)}
                                                    </td>
                                                    <td>
                                                        <div className="d-flex gap-3">
                                                            <div className=" btn bg-danger text-light " onClick={DeleteMyNews}>Delete</div>
                                                            <div className=" btn bg-info text-light ">Edit</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}