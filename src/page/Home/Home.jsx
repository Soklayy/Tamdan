import Alert from "../../component/Alert"
import Information from "./Information"
import Message from "./Message"
import Profile from "./Profile"
import Calendar from "./Calendar"
import Statistics from "./Statistics"
import Schedule from "./Schedule"

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="container  m-4">
                <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
                    
                    <Profile />
                    <h2 className="text-lg px-4 text-white">ស្ថិតិក្នុងខែនេះ</h2>
                    <Statistics />  

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <Information />
                        <Message />
                        <Calendar />
                        <Schedule />            
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Home

