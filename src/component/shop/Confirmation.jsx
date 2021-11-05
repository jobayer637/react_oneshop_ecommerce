import React from 'react'

function Confirmation() {
    return (
        <div>
            <section className="page-wrapper success-msg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="block text-center">
                                <i className="tf-ion-android-checkmark-circle"></i>
                                <h2 className="text-center">Thank you! For your payment</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sed.</p>
                                <a href="shop.html" className="btn btn-main mt-20">Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Confirmation
