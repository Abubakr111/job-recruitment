import Hero from '../Hero'
import HomeCards from '../HomeCard'
import JobListings from '../JobListings'
import ViewAllJobs from '../ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings isHome={true} />
        <ViewAllJobs />
    </>
  )
}

export default HomePage