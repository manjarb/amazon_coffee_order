import React, { Component } from 'react';

class Shopbox extends Component {

    returnLabelClass(person){
        if(person > 8){
            return "danger";
        } else
        if(person > 5){
            return "warning";
        } else {
            return "primary";
        }
    }

    render() {

        const shop = this.props.shop;

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={shop.thumbnail} alt="Siam paragon"/>
                        </figure>
                        <h2 className="text-center">
                            <strong>{shop.distance} KM</strong>
                        </h2>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{shop.name}</strong> <small>location</small> <strong>{shop.location}</strong>
                                <br/>
                                <span className={`margin-top-15 button is-${this.returnLabelClass(shop.waiting_number)} is-outlined queue-number-layout`}>จำนวนคิวก่อนหน้า <strong>&nbsp;{shop.waiting_number}&nbsp;</strong> คิว</span>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Shopbox;
