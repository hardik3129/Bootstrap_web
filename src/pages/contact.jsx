import React from 'react'

const Contact = () => {
  return (
    <div>
        {/* =========================== MAP =========================== */}
        <section className="section-pacing">
            <div className="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.081546682363!2d72.89593671473514!3d21.22861468589046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0458a801c2521%3A0x7f7b92a502e19649!2sRed%20%26%20White%20Multimedia%20Education%20-%20Sarthana!5e0!3m2!1sen!2sin!4v1672833648580!5m2!1sen!2sin" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </section>
        {/* ====================== REVIEW ====================== */}
        <section className="section-pacing review">
            <div className="review-img">
            <div className="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators carousel_indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active text-center person-img">
                    <div className="re-img">
                        <img src="images/person-img-1.jpg" className="d-block mx-auto" alt="..." />
                    </div>
                    <h4>Sara Wilsson</h4>
                    <h5>Designer</h5>
                    <div className="star mb-3">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                    </div>
                    <p> <sup><i className="fa-solid fa-quote-left" /></sup> Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptas iusto quis perferendis alias iure laboriosam rem odit blanditiis itaque commodi nemo
                        quas, assumenda accusamus dolor consequuntur deleniti! Unde, repellat minus! <sup><i className="fa-solid fa-quote-right" /></sup></p>
                    </div>
                    <div className="carousel-item text-center person-img">
                    <div className="re-img">
                        <img src="images/person-img-2.jpg" className="d-block mx-auto" alt="..." />
                    </div>
                    <h4>Jena Karlis</h4>
                    <h5>Store Owner</h5>
                    <div className="star mb-3">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                    </div>
                    <p> <sup><i className="fa-solid fa-quote-left" /></sup> Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptas iusto quis perferendis alias iure laboriosam rem odit blanditiis itaque commodi nemo
                        quas, assumenda accusamus dolor consequuntur deleniti! Unde, repellat minus! <sup><i className="fa-solid fa-quote-right" /></sup></p>
                    </div>
                    <div className="carousel-item text-center person-img">
                    <div className="re-img">
                        <img src="images/person-img-3.jpg" className="d-block mx-auto" alt="..." />
                    </div>
                    <h4>Matt Brandon</h4>
                    <h5>Freelancer</h5>
                    <div className="star mb-3">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                    </div>
                    <p> <sup><i className="fa-solid fa-quote-left" /></sup> Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptas iusto quis perferendis alias iure laboriosam rem odit blanditiis itaque commodi nemo
                        quas, assumenda accusamus dolor consequuntur deleniti! Unde, repellat minus! <sup><i className="fa-solid fa-quote-right" /></sup></p>
                    </div>
                    <div className="carousel-item text-center person-img">
                    <div className="re-img">
                        <img src="images/person-img-4.jpg" className="d-block mx-auto" alt="..." />
                    </div>
                    <h4>Saul Goodman</h4>
                    <h5>Ceo &amp; Founder</h5>
                    <div className="star mb-3">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                    </div>
                    <p> <sup><i className="fa-solid fa-quote-left" /></sup> Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptas iusto quis perferendis alias iure laboriosam rem odit blanditiis itaque commodi nemo
                        quas, assumenda accusamus dolor consequuntur deleniti! Unde, repellat minus! <sup><i className="fa-solid fa-quote-right" /></sup></p>
                    </div>
                    <div className="carousel-item text-center person-img">
                    <div className="re-img">
                        <img src="images/person-img-5.jpg" className="d-block mx-auto" alt="..." />
                    </div>
                    <h4>John Larson</h4>
                    <h5>Enterpreneur</h5>
                    <div className="star mb-3">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                    </div>
                    <p> <sup><i className="fa-solid fa-quote-left" /></sup> Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptas iusto quis perferendis alias iure laboriosam rem odit blanditiis itaque commodi nemo
                        quas, assumenda accusamus dolor consequuntur deleniti! Unde, repellat minus! <sup><i className="fa-solid fa-quote-right" /></sup></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
