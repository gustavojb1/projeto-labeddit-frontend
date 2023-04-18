import { useState } from "react"

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  }

  return [form, onChange];
}

export default useForm;