import '../UI/ErrorPopUp.css';

const ErrorPopUp = (props) => {
    return (
        <div className="error-bg">
            <div className="error-card">
                <p className="error-card__message">Please enter a valid input!</p>
                <button className="exitBtn" onClick={props.confirm}>CANCEL</button>
            </div>
        </div>
    );
}

export default ErrorPopUp;