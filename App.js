import logo from './logo.svg';
import './App.css';


function App() {
    return ( 
        
        <
        div className = 'container' >
        <h2>Feedback Form</h2>
        <
        form >
        <
        p >
        <
        label >
        First Name:
        <
        input type = "text"
        name = "firstname" / >
        <
        /label> <br></br >
        <
        label >
        Middle Name:
        <
        input type = "text"
        name = "middlename" / >
        <
        /label><br></br >
        <
        label >
        Last Name:
        <
        input type = "text"
        name = "lastname" / >
        <
        /label><br></br >
        <
        label >
        Gender:
        <
        select >
        <
        option selected value = "male" > Male < /option> <
        option value = "female" > Female < /option> < /
        select > <
        /label><br></br >
        <
        label >
        Email:
        <
        input type = "text"
        name = "email" / >
        <
        /label><br></br >
        <
        label >
        Date of Birth:
        <
        input type = "date"
        name = "dob" / >
        <
        /label><br></br >
        <
        label >
        Phone No.:
        <
        input type = "number"
        name = "phone" / >
        <
        /label><br></br >
        
        <label htmlFor=""><input type="checkbox" />I have a car
    </label><br></br>
    <label htmlFor=""><input type="checkbox" />I have a bike
    </label><br></br>
    <label htmlFor=""><input type="checkbox" />I have a bicycle
    </label><br></br>

        


       <
        input type = "submit"
        value = "Submit" / >
        
        <
        /p> < /
        form >

        <
        /div>
    );
}

export default App;