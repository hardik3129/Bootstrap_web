import React from 'react'

const About = () => {
  return (
    <div>
        <section className="section-pacing">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                <div className="about-cont">
                    <h2>About Us</h2>
                    <p>Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia
                    molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis
                    veritatis asperiores placeat.</p>
                    <ul>
                    <li className="mt-5 d-flex">
                        <i className="fa-solid fa-diagram-project" />
                        <div>
                        <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                        <p className="mb-0">Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                        </div>
                    </li>
                    <li className="mt-5 d-flex">
                        <i className="fa-solid fa-compress" />
                        <div>
                        <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                        <p className="mb-0">Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata
                            redi</p>
                        </div>
                    </li>
                    <li className="mt-5 d-flex">
                        <i className="fa-solid fa-podcast" />
                        <div>
                        <h5>Voluptatem et qui exercitationem</h5>
                        <p className="mb-0">Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime
                            veniam</p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="col-lg-6">
                <img src="images/about-img.jpg" alt />
                </div>
            </div>
            </div>
        </section>

        <section className="ask-qeustions section-pacing">
            <div className="section-header text-center ask-qeustions-header">
                <span>FREQUENTLY ASKED QUESTIONS</span>
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="fa-regular fa-circle-question" />
                            Non consectetur a erat nam at lectus urna duis?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur
                            gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i className="fa-regular fa-circle-question" />
                            Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                            donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit
                            ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <i className="fa-regular fa-circle-question" />
                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum
                            integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt.
                            Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi
                            quis
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFoure">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFoure" aria-expanded="false" aria-controls="collapseFoure">
                            <i className="fa-regular fa-circle-question" />
                            Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                        </button>
                        </h2>
                        <div id="collapseFoure" className="accordion-collapse collapse" aria-labelledby="headingFoure" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id
                            donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit
                            ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <i className="fa-regular fa-circle-question" />
                            Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                        </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc
                            vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus
                            gravida quis blandit turpis cursus in
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
