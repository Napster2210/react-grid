import { useState } from 'react';

const useAddForm = (cb: () => void) => {
  const [inputs, setInputs] = useState<any>({});

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    if (event) {
      event.preventDefault();
    }
    cb();
  }
  const handleInputChange = (event: { persist: () => void; target: { name: any; value: any; }; }) => {
    event.persist();
    setInputs((inputs: any) => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useAddForm;