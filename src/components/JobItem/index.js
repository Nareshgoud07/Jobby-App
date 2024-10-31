import {Link} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const JobItem = props => {
  const {jobItem} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobItem
  return (
    <Link to={`/jobs/${id}`}>
      <li className="job-item-card-container" key={id}>
        <div className="job-item-card-company-name-card">
          <img
            src={companyLogoUrl}
            alt="profile"
            className="job-item-card-profile-image"
          />
          <div className="job-item-card-profile-head-card">
            <h1 className="job-item-card-profile-head">{title}</h1>
            <div className="job-item-card-profile-rating-card">
              <FaStar className="rating-star" />
              <p>{rating}</p>
            </div>
          </div>
        </div>
        <div className="job-item-info-card-container">
          <div className="job-item-info-card">
            <MdLocationOn className="job-item-location-icon " />
            <p>{location}</p>
            <BsBriefcaseFill className="job-item-briefcase-icon" />
            <p>{employmentType}</p>
          </div>
          <p className="salary">{packagePerAnnum}</p>
        </div>
        <hr className="separator" />
        <h1 className="job-item-description-head">Description</h1>
        <p>{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobItem
