import React from 'react';

const Breadcrumb = ({previouspage1,previouspage2,currentpage,previouspage1url,previouspage1ur2}) => {
    return (
        <div className="container-fluid">
        <div className="row px-xl-5">
            <div class="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <a className="breadcrumb-item text-dark" href={previouspage1url}>{previouspage1}</a>
                    <a className="breadcrumb-item text-dark" href={previouspage1url}>{previouspage2}</a>
                    <span className="breadcrumb-item active">{currentpage}</span>
                </nav>
            </div>
        </div>
    </div>
    );
};

export default Breadcrumb;