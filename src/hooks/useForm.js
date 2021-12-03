// write your custom hook here to control your checkout form
import { useState, useEffect } from 'react';

function useForm() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState();
  
    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowSuccessMessage(true);
    };

    return [showSuccessMessage, values, handleChanges, handleSubmit];
}

export default useForm