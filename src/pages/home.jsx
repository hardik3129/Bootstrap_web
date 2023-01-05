import React from 'react'

const Home = () => {
  return (
    <div>
    <section className="banner py-5 banner-bg-img">
        <div className="container text-light">
        <div className="row align-items-center">
            <div className="col-lg-6">
            <h1 className="fw-bold mb-4">Your Lightning Fast Delivery Partner</h1>
            <p className="mb-5">Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis
                sit odio nemo
                quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est
                possimus vel reprehenderit</p>
            <form className="position-relative banner_search mb-5">
                <input type="text" placeholder="ZIP code or CitY" className="form-control p-4 px-4" />
                <button className="btn btn-primary position-absolute banner_btn">Search</button>
            </form>
            <div className="row">
                <div className="col-3 text-center">
                <h2 className="fw-bold status_item">232</h2>
                <p className="fw-bold">Clients</p>
                </div>
                <div className="col-3 text-center">
                <h2 className="fw-bold status_item">521</h2>
                <p className="fw-bold">Projects</p>
                </div>
                <div className="col-3 text-center">
                <h2 className="fw-bold status_item">1453</h2>
                <p className="fw-bold">Support</p>
                </div>
                <div className="col-3 text-center">
                <h2 className="fw-bold status_item">32</h2>
                <p className="fw-bold">Workers</p>
                </div>
            </div>
            </div>
            <div className="col-lg-6">
            <img src="images/banner-img.svg" alt />
            </div>
        </div>
        </div>
    </section>

    {/* <!-- ======================== FEATURED-SERVICES ========================--> */}
    <section className="section-pacing">
        <div className="container">
            <div className="row">
            <div className="card col-lg-4 border-0 featured_card">
                <div className="d-flex p-3">
                <i className="fa-solid fa-cart-flatbed featured_icon me-4" />
                <div className="card_body">
                    <h5 className="card-title fw-bold">Lorem Ipsum</h5>
                    <p className="card-text">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident</p>
                    <h6 className="card-text fw-bold">Learn More <i className="fa-solid fa-arrow-right" /></h6>
                </div>
                </div>
            </div>
            <div className="card col-lg-4 border-0 featured_card">
                <div className="d-flex p-3">
                <i className="fa-solid fa-truck featured_icon me-4" />
                <div className="card_body">
                    <h5 className="card-title fw-bold">Dolor Sitema</h5>
                    <p className="card-text">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat tarad limino ata</p>
                    <h6 className="card-text fw-bold">Learn More <i className="fa-solid fa-arrow-right" /></h6>
                </div>
                </div>
            </div>
            <div className="card col-lg-4 border-0 featured_card">
                <div className="d-flex p-3">
                <i className="fa-solid fa-truck-ramp-box featured_icon me-4" />
                <div className="card_body">
                    <h5 className="card-title fw-bold">Sed ut perspiciatis</h5>
                    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur</p>
                    <h6 className="card-text fw-bold">Learn More <i className="fa-solid fa-arrow-right" /></h6>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className="section-pacing features">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5">
                    <img src="images/feature-img.jpg" alt />
                </div>
                <div className="col-lg-7">
                    <div className="feature-cont">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                        <li>
                        <i className="fa-solid fa-check" />
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </li>
                        <li>
                        <i className="fa-solid fa-check" />
                        Duis aute irure dolor in reprehenderit in voluptate velit.
                        </li>
                        <li>
                        <i className="fa-solid fa-check" />
                        Ullam est qui quos consequatur eos accusamus.
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/* ============= feature-2 ============== */}
                <div className="section-pacing row align-items-center">
                <div className="col-lg-5 order-lg-2">
                    <img src="images/feature-img-2.jpg.jpg" alt />
                </div>
                <div className="col-lg-7 order-lg-1">
                    <div className="feature-cont">
                    <h3>Corporis temporibus maiores provident</h3>
                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
                </div>
                {/* ============= feature-3 ============== */}
                <div className="section-pacing row align-items-center">
                <div className="col-lg-5">
                    <img src="images/feature-img-3.jpg" alt />
                </div>
                <div className="col-lg-7">
                    <div className="feature-cont">
                    <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                    <p className="fst-italic">Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt
                        saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                    <ul>
                        <li>
                        <i className="fa-solid fa-check" />
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </li>
                        <li>
                        <i className="fa-solid fa-check" />
                        Duis aute irure dolor in reprehenderit in voluptate velit.
                        </li>
                        <li>
                        <i className="fa-solid fa-check" />
                        Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                {/* ============= feature-4 ============== */}
                <div className="section-pacing row align-items-center">
                <div className="col-lg-5 order-lg-2">
                    <img src="images/feature-img-4.jpg" alt />
                </div>
                <div className="col-lg-7 order-lg-1">
                    <div className="feature-cont">
                    <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
                </div>
            </div>
            </section>

    </div>
  )
}

export default Home
