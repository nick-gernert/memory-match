1
import Layout from '../components/Layout/Layout'
import MemoryMatch from '../components/MemoryMatch/MemoryMatch'

const Home = () => {
  return (
    <Layout>
      <div className="bg-indigo-300 py-8">
        <MemoryMatch />
      </div>
    </Layout>
  )
}

export default Home
