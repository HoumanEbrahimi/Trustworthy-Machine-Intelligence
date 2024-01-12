import './mainPage.css'
import Footer from './Layout.js'
const Main = () =>{
    return(
        <div>
        <div >      
            <br></br>
        <h1  style={{color:"#2596be",fontSize:"55px",fontFamily:"Times New Roman"}}> UofT Trustworthy Machine Intelligence Team</h1>
        <br></br>
        <img className="responsive-image"
            src="https://media.discordapp.net/attachments/1110694099297763338/1126277657252860004/tmi_logo.png?width=1440&height=360"
            alt=""
            width="1400" 
            />    
     
            <br></br>
            <p className="font-custom"> The Trustworthy Machine Intelligence Team (TMI) is committed to educating and 
            taking action on ethical concerns within artificial <br/> intelligence and data science. Bias in decision systems, 
            data privacy and surveillance, as well as manipulation of behaviour, are just <br/> some of the  ethical concerns 
            that need to be addressed to avoid AI causing detrimental effects to individuals and society. Our mission <br/>
            is to make  the ethics  in AI more accessible through educational workshops and hands-on projects. Our club 
            is committed to building<br/> a supportive community of students passionate about ethical principles in AI.</p>
            <br></br>
            <strong className="bold"> We welcome all students from all backgrounds of knowledge and experience </strong>

         </div>

            <br></br><br></br> <br></br>

        <Footer> </Footer>
        </div>
    )
   
}

export default Main;