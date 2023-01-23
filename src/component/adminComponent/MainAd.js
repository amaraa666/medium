import { BarChart } from "./BarChart"

export default function MainAd({ myData }) {
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
                                        <h3>4500</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-title fs-4 text-warning">News</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-newspaper fs-3"></i>
                                        <h3>9000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-3">
                                    <div className="card-title fs-4 text-warning">Category</div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="bi bi-card-checklist fs-3"></i>
                                        <h3>45</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <BarChart myData={myData} />
                            <div className="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Body</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myData.map(({ _id, title, isTrending, category }, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{title}</td>
                                                    <td>{category}</td>
                                                    <td>
                                                        {isTrending ? (<span className="badge bg-success">yes</span>) : (<span className="badge bg-danger">no</span>)}
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