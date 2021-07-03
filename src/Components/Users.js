import React from "react";
import './Users.css';


const Users = ({ name, email, webSite, phone, address, userName, company }) => {
  return (
  
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{company}</p>
              </div>
                    <h5>
                   <span>{name}</span>
                  </h5>
                  <h5>
                  <span>{userName}</span>
                  </h5>
                  <h5>
                   <span>{address}</span>
                  </h5>
                  <h5>
                   <span>{phone}</span>
                  </h5>
                  <h5>
                   <span>{email}</span>
                  </h5>
        </div>
        <div className="bg-custom">
          <p>
            Visit : <span> {webSite}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;