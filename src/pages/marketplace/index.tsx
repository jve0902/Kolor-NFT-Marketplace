import Layout from "../../layout"
import SideBar from "../../components/sidebar";

const Marketplace = () => {
  return (
    <>
      <Layout title="Marketplace">
        <div className="flex bg-dashboard min-h-screen w-full">
          <SideBar />
        </div>   
      </Layout>
    </>
  )
}

export default Marketplace