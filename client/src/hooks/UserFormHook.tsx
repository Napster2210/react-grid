import { useState } from 'react';

const useManageForm = (cb: (data: any) => void, inputValues = {}) => {
  const [inputs, setInputs] = useState<any>(inputValues);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    if (event) {
      event.preventDefault();
    }
    cb(inputs);
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

export default useManageForm;