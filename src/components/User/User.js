import React from 'react';

const User = ({user , addUserHandler}) => {
 
    //destructuring Here from object
    const {Name , Email , Income , Adress , img} = user;
    //two css style
    const bodyStyle = {border : '5px solid grey' , margin : '50px' , display : 'flex' , maxWidth :'30%'};
    const imgStyle = {height : '150px' ,width : '150px' , border : '1px solid lightgrey',margin  :'10px' }

    return (
        <div style={bodyStyle}>
                            <div className="pic">
                                      <img src={img} alt="" style={imgStyle}/>
                            </div>
                          <div className="information">

                                <h4>{Name}</h4>
                                <p>Email : {Email}</p>
                                <p>Adress : {Adress}</p>
                                <p>Income : {Income}</p>
                                <button onClick = {()=>addUserHandler(user)}>Add Friend</button>

                    </div>
        </div>
    );
};

export default User;