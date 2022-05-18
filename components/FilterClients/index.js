import { useState } from 'react';
import { dropdownContainer, dropdownGender, dropdownAge, active, filterBar, filterBarAge, filterBarGender } from './styles';

const FilterClient = ({ age, gender, filterAge, filterGender }) => {

	const [showGender, setShowGender] = useState(false)
  const [showAge, setShowAge] = useState(false)

  const toggleGenderDropdown = () => {
    setShowGender(!showGender)
    setShowAge(false)
  }

  const toggleAgeDropdown = () => {
    setShowAge(!showAge)
    setShowGender(false)
  }

	const handleFilterGender = (value) => {
		filterGender(value)
		setShowAge(false)
		setShowGender(false)
	}

	const handleFilterAge = (value) => {
		filterAge(value)
		setShowAge(false)
		setShowGender(false)
	}

	const toggleActiveGender = (value) => {
		return gender === value ? active: '';
	}

	const toggleActiveAge = (value) => {
		return age === value ? active: '';
	}

	return (
		<>
			<div className="filter-bar-container">
				<p className={ `${filterBarGender({showGender})} ${filterBar}` } onClick={toggleGenderDropdown}>Gender: {gender}</p>
				<div className={`${dropdownGender({showGender})} ${dropdownContainer}`}>
					<a className={toggleActiveGender('all') } onClick={() => handleFilterGender('all')}>All</a>
					<a className={toggleActiveGender('male') } onClick={() => handleFilterGender('male')}>Male</a>
					<a className={toggleActiveGender('female') } onClick={() => handleFilterGender('female')}>Female</a>
				</div>
			</div>
			<div className="filter-bar-container">
				<p className={`${filterBarAge({showAge})} ${filterBar}`} onClick={toggleAgeDropdown}>Age: {age}</p>
				<div className={`${dropdownAge({showAge})} ${dropdownContainer}`}>
					<a className={ toggleActiveAge('all') } onClick={() => handleFilterAge('all')}>All</a>
					<a className={ toggleActiveAge('legal') ? active : ''  } onClick={() => handleFilterAge('legal')}>Legal Age</a>
					<a className={ toggleActiveAge('minor') ? active : ''  }onClick={() => handleFilterAge('minor')}>Minor Age</a>
				</div> 
			</div>
		</>
	)
}
 
 export default FilterClient
 