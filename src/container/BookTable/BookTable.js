// import axios from 'axios';
// import React, { useState } from 'react'
import './booktable.css';

const BookTable = () => {
  
    const d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let d1 = date + '/' + (month + 1);
    date += 1;
    if (date > 31) {
        month += 1;
    }
    let d2 = date + '/' + (month + 1);
    date = date % 31 + 1;
    month += 1;
    let d3 = date + '/' + (month + 1);

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({values, [name]: value}))
    // }
    // const [inputs, setInputs] = useState({})
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     axios.post('http://localhost:3307/api/users/save', inputs)
    //     console.log(inputs);
    // }

  return (
    <>
    <section className="banner" id="booktable">
        <h2>Book a Table</h2>
        <div className="card-container">
            <div className="card-img">
            </div>

            <div className="card-content">
                <h4>Please select your booking details</h4>
                <form name="myForm">
                    <div className="form-row">
                        <select name="days" required>
                            <option value="">Select Day</option>
                            <option id="date1">{d1}</option>
                            <option id="date2">{d2}</option>
                            <option id="date3">{d3}</option>
                        </select>

                        <select name="hours" required>
                            <option value="">Select Hour</option>
                            <option value="10">10: 00</option>
                            <option value="12">12: 00</option>
                            <option value="14">14: 00</option>
                            <option value="16">16: 00</option>
                            <option value="18">18: 00</option>
                            <option value="20">20: 00</option>
                            <option value="22">22: 00</option>
                        </select>
                    </div>

                    <div className="form-row">
                        <input type="text" placeholder="Full Name" name="name" required></input>
                        <input type="number" placeholder="Phone Number" name="phone" required></input>
                    </div>

                    <div className="form-row">
                        <input type="number" placeholder="How Many Persons?" min="1" name="num"></input>
                        <input type="submit" value="BOOK TABLE"></input>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  );
}

export default BookTable;