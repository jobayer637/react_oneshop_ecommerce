import React from 'react'
import {NavLink} from 'react-router-dom'

function ProductDetails() {
    return (
        <div>
            <section className="single-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ol className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="shop.html">Shop</a></li>
                                <li className="active">Single Product</li>
                            </ol>
                        </div>
                        <div className="col-md-6">
                            <ol className="product-pagination text-right">
                                <li><a href="blog-left-sidebar.html"><i className="tf-ion-ios-arrow-left"></i> Next </a></li>
                                <li><a href="blog-left-sidebar.html">Preview <i className="tf-ion-ios-arrow-right"></i></a></li>
                            </ol>
                        </div>
                    </div>
                    <div className="row mt-20">
                        <div className="col-md-5">
                            <div className="single-product-slider">
                                <div id='carousel-custom' className='carousel slide' data-ride='carousel'>
                                    <div className='carousel-outer'>


                                        <div className='carousel-inner '>
                                            <div className='item active'>
                                                <img src='images/shop/single-products/product-1.jpg' alt='' data-zoom-image="images/shop/single-products/product-1.jpg" />
                                            </div>
                                            <div className='item'>
                                                <img src='images/shop/single-products/product-2.jpg' alt='' data-zoom-image="images/shop/single-products/product-2.jpg" />
                                            </div>

                                            <div className='item'>
                                                <img src='images/shop/single-products/product-3.jpg' alt='' data-zoom-image="images/shop/single-products/product-3.jpg" />
                                            </div>
                                            <div className='item'>
                                                <img src='images/shop/single-products/product-4.jpg' alt='' data-zoom-image="images/shop/single-products/product-4.jpg" />
                                            </div>
                                            <div className='item'>
                                                <img src='images/shop/single-products/product-5.jpg' alt='' data-zoom-image="images/shop/single-products/product-5.jpg" />
                                            </div>
                                            <div className='item'>
                                                <img src='images/shop/single-products/product-6.jpg' alt='' data-zoom-image="images/shop/single-products/product-6.jpg" />
                                            </div>

                                        </div>


                                        <a className='left carousel-control' href='#carousel-custom' data-slide='prev'>
                                            <i className="tf-ion-ios-arrow-left"></i>
                                        </a>
                                        <a className='right carousel-control' href='#carousel-custom' data-slide='next'>
                                            <i className="tf-ion-ios-arrow-right"></i>
                                        </a>
                                    </div>



                                    <ol className='carousel-indicators mCustomScrollbar meartlab'>
                                        <li data-target='#carousel-custom' data-slide-to='0' className='active'>
                                            <img src='images/shop/single-products/product-1.jpg' alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='1'>
                                            <img src='images/shop/single-products/product-2.jpg' alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='2'>
                                            <img src='images/shop/single-products/product-3.jpg' alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='3'>
                                            <img src='images/shop/single-products/product-4.jpg' alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='4'>
                                            <img src='images/shop/single-products/product-5.jpg' alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='5'>
                                            <img src='images/shop/single-products/product-6.jpg' alt='' />
                                        </li>
                                        <li data-target='#carousel-custom' data-slide-to='6'>
                                            <img src='images/shop/single-products/product-7.jpg' alt='' />
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single-product-details">
                                <h2>Eclipse Crossbody</h2>
                                <p className="product-price">$300</p>

                                <p className="product-description mt-20">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsum dicta quod, quia doloremque aut deserunt commodi quis. Totam a consequatur beatae nostrum, earum consequuntur? Eveniet consequatur ipsum dicta recusandae.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, velit, sunt temporibus, nulla accusamus similique sapiente tempora, at atque cumque assumenda minus asperiores est esse sequi dolore magnam. Debitis, explicabo.</p>
                                <div className="color-swatches">
                                    <span>color:</span>
                                    <ul>
                                        <li>
                                            <a href="#!" className="swatch-violet"></a>
                                        </li>
                                        <li>
                                            <a href="#!" className="swatch-black"></a>
                                        </li>
                                        <li>
                                            <a href="#!" className="swatch-cream"></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-size">
                                    <span>Size:</span>
                                    <select className="form-control">
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                </div>
                                <div className="product-quantity">
                                    <span>Quantity:</span>
                                    <div className="product-quantity-slider">
                                        <input id="product-quantity" type="text" value="0" name="product-quantity" />
                                    </div>
                                </div>
                                <div className="product-category">
                                    <span>Categories:</span>
                                    <ul>
                                        <li><a href="product-single.html">Products</a></li>
                                        <li><a href="product-single.html">Soap</a></li>
                                    </ul>
                                </div>
                                <a href="cart.html" className="btn btn-main mt-20">Add To Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="tabCommon mt-20">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a data-toggle="tab" href="#details" aria-expanded="true">Details</a></li>
                                    <li className=""><a data-toggle="tab" href="#reviews" aria-expanded="false">Reviews (3)</a></li>
                                </ul>
                                <div className="tab-content patternbg">
                                    <div id="details" className="tab-pane fade active in">
                                        <h4>Product Description</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut per spici</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis delectus quidem repudiandae veniam distinctio repellendus magni pariatur molestiae asperiores animi, eos quod iusto hic doloremque iste a, nisi iure at unde molestias enim fugit, nulla voluptatibus. Deserunt voluptate tempora aut illum harum, deleniti laborum animi neque, praesentium explicabo, debitis ipsa?</p>
                                    </div>
                                    <div id="reviews" className="tab-pane fade">
                                        <div className="post-comments">
                                            <ul className="media-list comments-list m-bot-50 clearlist">


                                                <li className="media">

                                                    <a className="pull-left" href="#!">
                                                        <img className="media-object comment-avatar" src="images/blog/avater-1.jpg" alt="" width="50" height="50" />
                                                    </a>

                                                    <div className="media-body">
                                                        <div className="comment-info">
                                                            <h4 className="comment-author">
                                                                <a href="#!">Jonathon Andrew</a>

                                                            </h4>
                                                            <time datetime="2013-04-06T13:53">July 02, 2015, at 11:34</time>
                                                            <a className="comment-button" href="#!"><i className="tf-ion-chatbubbles"></i>Reply</a>
                                                        </div>

                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum minima, reprehenderit laboriosam officiis praesentium? Impedit minus provident assumenda quae.
                                                        </p>
                                                    </div>

                                                </li>





                                                <li className="media">

                                                    <a className="pull-left" href="#!">
                                                        <img className="media-object comment-avatar" src="images/blog/avater-4.jpg" alt="" width="50" height="50" />
                                                    </a>

                                                    <div className="media-body">

                                                        <div className="comment-info">
                                                            <div className="comment-author">
                                                                <a href="#!">Jonathon Andrew</a>
                                                            </div>
                                                            <time datetime="2013-04-06T13:53">July 02, 2015, at 11:34</time>
                                                            <a className="comment-button" href="#!"><i className="tf-ion-chatbubbles"></i>Reply</a>
                                                        </div>

                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni natus, nostrum iste non delectus atque ab a accusantium optio, dolor!
                                                        </p>

                                                    </div>

                                                </li>





                                                <li className="media">

                                                    <a className="pull-left" href="#!">
                                                        <img className="media-object comment-avatar" src="images/blog/avater-1.jpg" alt="" width="50" height="50" />
                                                    </a>

                                                    <div className="media-body">

                                                        <div className="comment-info">
                                                            <div className="comment-author">
                                                                <a href="#!">Jonathon Andrew</a>
                                                            </div>
                                                            <time datetime="2013-04-06T13:53">July 02, 2015, at 11:34</time>
                                                            <a className="comment-button" href="#!"><i className="tf-ion-chatbubbles"></i>Reply</a>
                                                        </div>

                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at magna ut ante eleifend eleifend.
                                                        </p>

                                                    </div>

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="products related-products section">
                <div className="container">
                    <div className="row">
                        <div className="title text-center">
                            <h2>Related Products</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="product-item">
                                <div className="product-thumb">
                                    <span className="bage">Sale</span>
                                    <img className="img-responsive" src="images/shop/products/product-5.jpg" alt="product-img" />
                                    <div className="preview-meta">
                                        <ul>
                                            <li>
                                                <span data-toggle="modal" data-target="#product-modal">
                                                    <i className="tf-ion-ios-search"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <a href="#" ><i className="tf-ion-ios-heart"></i></a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-android-cart"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4>
                                       <NavLink to="product-details">
                                       <a href="">Reef Boardsport</a>
                                       </NavLink>
                                        </h4>
                                    <p className="price">$200</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-item">
                                <div className="product-thumb">
                                    <img className="img-responsive" src="images/shop/products/product-1.jpg" alt="product-img" />
                                    <div className="preview-meta">
                                        <ul>
                                            <li>
                                                <span data-toggle="modal" data-target="#product-modal">
                                                    <i className="tf-ion-ios-search-strong"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <a href="#" ><i className="tf-ion-ios-heart"></i></a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-android-cart"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-single.html">Rainbow Shoes</a></h4>
                                    <p className="price">$200</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-item">
                                <div className="product-thumb">
                                    <img className="img-responsive" src="images/shop/products/product-2.jpg" alt="product-img" />
                                    <div className="preview-meta">
                                        <ul>
                                            <li>
                                                <span data-toggle="modal" data-target="#product-modal">
                                                    <i className="tf-ion-ios-search"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <a href="#" ><i className="tf-ion-ios-heart"></i></a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-android-cart"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-single.html">Strayhorn SP</a></h4>
                                    <p className="price">$230</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="product-item">
                                <div className="product-thumb">
                                    <img className="img-responsive" src="images/shop/products/product-3.jpg" alt="product-img" />
                                    <div className="preview-meta">
                                        <ul>
                                            <li>
                                                <span data-toggle="modal" data-target="#product-modal">
                                                    <i className="tf-ion-ios-search"></i>
                                                </span>
                                            </li>
                                            <li>
                                                <a href="#" ><i className="tf-ion-ios-heart"></i></a>
                                            </li>
                                            <li>
                                                <a href="#!"><i className="tf-ion-android-cart"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="product-single.html">Bradley Mid</a></h4>
                                    <p className="price">$200</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetails
