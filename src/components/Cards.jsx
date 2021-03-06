import React from 'react';
import '../styles/App.css';

const cardList = ({cardOptions})=> {
    return (
        <div className="row text-center">
            {
            cardOptions.map(({title, caption, cardImage, btnClick}, index)=>{
                return (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="rounded z-depth-2">
                            <img src={cardImage} className="img-fluid" alt="Sample project"></img>
                        </div>
                        <div className="card-body pb-0">
                            <h4 className="font-weight-bold">{title}</h4>
                            <p className="grey-text font-weight-bold">{caption}</p>
                            <a className="btn text-white stylish-color-dark btnHover" target="_blank" href={btnClick} rel="noopener noreferrer"><i className="fa fa-clone left"></i> View project</a>
                        </div>
                    </div>
                );
            })}
        </div> 
    ); 
};


export default cardList;
