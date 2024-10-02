import './App.css'
// import Comments from "./components/Comments"
import Card from "./components/Card"

function App() {
  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden relative  
    flex items-center justify-center p-8 mx-0 my-auto">
    {/* <Comments/> */}
    <Card/>
    </div> 
  );
}

export default App
