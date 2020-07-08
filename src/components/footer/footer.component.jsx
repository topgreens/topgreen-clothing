import React from 'react';
import { Link } from 'react-router-dom';




const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row'>
                    {/* column1 */}
                    <div className='col'>
                        <h4>TOPGR-Clothing</h4>
                        <Link className='list-unstyled'>
                            <li>123-456-789</li>
                            <li>Madrid, SPAIN</li>
                            <li>325 wall street</li>
                        </Link>
                    </div>
                    {/* column2 */}
                    <div className='col'>
                        <h4>STUFF</h4>
                        <Link className='list-unstyled'>
                            <li></li>
                            <li></li>
                            <li></li>
                        </Link>

                    </div>
                    {/* column3 */}
                    <div className='col'>
                        <h4>WOMEN</h4>
                        <Link className='list-unstyled'>
                            <li></li>
                            <li></li>
                            <li></li>
                        </Link>

                    </div>
                </div>
                <br />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;(new Date().getFullYear()) TOPGREEN LTD | All rights reserved |Term of service |Privacy

                  </p>

                </div>
            </div>
        </div>
    )
}

export default Footer;