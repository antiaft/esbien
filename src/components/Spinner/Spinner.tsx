import './Spinner.css'

const Spinner = () => {
  return (
    <div className="spinner">
      {[...Array(10)].map((bar, i) => (
        <div key={i} className={`bar${i + 1} ${bar}`} />
      ))}
    </div>
  )
}

export default Spinner
