import './styles.css';
import Box from './Box'
import {useState} from 'react'
const App=()=>{
  const navItems =['Home','Dashboard','Blog','Contact'];
  const footer =['Facebook','Instagram','Blog','Privacy Policy'];
  const Site = 'Test.com';
  const Arr =[
      {
        id:1,
        title:'What is Lorem Ipsum?',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
      },
      {
        id:2,
        title:'Where does it come from?',
        description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites'
      }
  ];
  const [currentPage,setCurrentPage] = useState('Home');

  const change=(e)=>{
    console.log(e.target.innerText)
  }

  const changePage=(value)=>{
      console.log(value)
      setCurrentPage(value);
      document.querySelectorAll('.show').forEach(function(e){
          e.style.display="none";
      });
      document.querySelector('.'+value).style.display="block";
  }
 
  return(
    <>
    <div className="navBar">
      <ul>
      {
          navItems.map((item)=> <li onClick={(e)=>changePage(e.target.innerText)}>{item}</li>)
        }
      </ul>
    </div>
    <div className="container">
      <p>{currentPage}</p>
      <div className="show Home">
        {
          Arr.map((item)=> <Box runFunc={(e)=>change(e)} title={item.title} description={item.description}></Box>)
        }
      </div>
      <div className="show Dashboard" style={{display:"none"}}>
        dashboard data goes here
      </div>
      <div className="show Blog" style={{display:"none"}}>
        Blog data goes here
      </div>
      <div className="show Contact" style={{display:"none"}}>
        Contact data goes here
      </div>
    </div>
    <div className="footer">
      <div style={{display:"flex"}}>
      <ul>
        <li>{Site}</li>
      </ul>
      <ul>
      {
          footer.map((item)=> <li >{item}</li>)
      }
      </ul>
      </div>
    </div>
    </>
  )
}

export  default App;