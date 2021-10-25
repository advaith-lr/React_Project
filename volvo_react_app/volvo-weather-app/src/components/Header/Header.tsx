import './Header.css'
// import { useState, useEffect } from 'react';
// import { setConstantValue } from 'typescript';
// import  VolvoLogo  from '../volvo.png'
type HeaderProps = {
    titleGreeting: string,
    onDateChange: any
  }

export const Header = ( { titleGreeting, onDateChange } : HeaderProps ) => {

  
  let selectedOptionvalue = 'tomorrow'
  
    return (
        // <div classNameName= 'row navbar navbar-inverse"'>
        //     Hello {titleGreeting}, Welcome to the weather app
        // </div>
        
<div data-testid="header-elemet" className="navbar ad-header">
  <div className="container-fluid">
    <div className="navbar-header ">
    <img src={process.env.PUBLIC_URL + '/volvo.png' } alt="React Logo" /> &nbsp;
        Hello <b>{titleGreeting}</b>, 
    </div>
      <div className = "d-flex">
       <span>Weather for: &nbsp;</span> 
       <span>
         {/* Change between different dates */}
       <select className="form-select ad-select " 
       defaultValue={selectedOptionvalue}
       onChange = {(e) =>onDateChange((e.target.value))}
        aria-label="Default select example">
        <option value="today" label= "Today"></option>
        <option value="tomorrow" label= "Tomorrow" ></option>
        <option value="twoDaysLater" label= "2 Days later">  </option>
      </select>
       </span>
      
      </div>

  </div>
</div>
  
    )
}

