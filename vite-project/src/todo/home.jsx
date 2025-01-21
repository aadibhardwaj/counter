function Home(){
    const [inp,setInp] = useState("");

    // function changeInp(e){
    //     setInp(e.target.value);
    // }
 return(
    
    <div id="todo">
    <h1>ToDo App</h1>
    <input type="text" placeholder="Enter ur Task" value={inp} onchange={changeIn}
    <button>Add Task</button>
    </div>

    <ul></ul>
 )
}
export default Home;