const [formData, setFormData] = useState({
  username: '',
  email: '',
})

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}
