import './booktable.css';
import {useState} from 'react';
import axios from "axios";

const BookTable = () => {
  
    const d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let d1 = date + '/' + (month + 1);
    date += 1;
    if (date > 31) {
        month += 1;
        date = date % 31;
    }
    let d2 = date + '/' + (month + 1);
    date = date % 31 + 1;
    let d3 = date + '/' + (month + 1);

    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        console.log(inputs);
        event.preventDefault();
        let formData = new FormData();
        formData.append("days", inputs.days);
        formData.append("hours", inputs.hours);
        formData.append("name", inputs.name);
        formData.append("phone", inputs.phone);
        formData.append("num", inputs.num);
        axios({
            method: 'post',
            url: 'http://localhost/src/container/BookTable/booktable.php',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log(response)
            alert('New Contact Successfully Added.');  
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }

  return (
    <>
    <section className="banner" id="booktable">
        <h2>Book a Table</h2>
        <div className="card-container">
            <div className="card-img">
            </div>

            <div className="card-content">
                <h4>Please select your booking details</h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <select name="days"  onChange={handleChange} required>
                            <option value="">Select Day</option>
                            <option id="date1">{d1}</option>
                            <option id="date2">{d2}</option>
                            <option id="date3">{d3}</option>
                        </select>

                        <select name="hours"  onChange={handleChange} required>
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
                        <input type="text" placeholder="Full Name" name="name"  onChange={handleChange} required></input>
                        <input type="number" placeholder="Phone Number" name="phone" onChange={handleChange} required></input>
                    </div>

                    <div className="form-row">
                        <input type="number" placeholder="How Many Persons?" min="1" name="num"  onChange={handleChange} required></input>
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