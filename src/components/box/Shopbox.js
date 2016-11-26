import React, { Component } from 'react';
import ParagonLogo from '../../images/paragon_logo.png';

class Shopbox extends Component {
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={ParagonLogo} alt="Siam paragon"/>
                        </figure>
                        <h2 className="text-center">
                            <strong>0.5 KM</strong>
                        </h2>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>Amazon Cafe</strong> <small>location</small> <strong>Siam Paragon</strong>
                                <br/>
                                <span className="margin-top-15 button is-primary is-outlined queue-number-layout">จำนวนคิวก่อนหน้า <strong>&nbsp;12&nbsp;</strong> คิว</span>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Shopbox;
