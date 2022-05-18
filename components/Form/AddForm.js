import { clientFormContainer, clientForm, closeBtn, submitBtn } from "./styles";
import Image from 'next/image';


const AddForm = ({ handleFormSubmit, handleChange, clientName, clientAge, clientGender, editClient, toggleModal, showModal }) => {
	return (
    <div className={clientFormContainer({ showModal })}>
      <form 
        className={clientForm} 
        onSubmit={handleFormSubmit}
      >
        <h3>{editClient ? "Edit Client" : "Add Clients "}</h3> 
        <a className={closeBtn} onClick={toggleModal}>
          <Image src="/assets/images/close.png" width={26} height={26} />
        </a>

        <input 
          name="name" 
          type="text" 
          placeholder="name" 
          value={clientName} 
          onChange={handleChange}
          required
        />

        <input 
          name="age" 
          type="number" 
          placeholder="age" 
          value={clientAge} 
          onChange={handleChange}
          required
        />

        <select 
          id="gender" 
          name="gender" 
          value={clientGender} 
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* submit btn */}
        <input 
          type="submit" 
          className={submitBtn}
          placeholder="submit"
        />
      </form>
    </div>
	)

}

export default AddForm