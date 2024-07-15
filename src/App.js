import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
import Product from './Product';
import Productcard from './Productcard';
import Productcard2 from './Productcard2';
import Social from './Social';
import Bottomsocial from './Bottomsocial';




function App() {
  return (
    <div className='container'>
   <div className='container1'>
    <Demo></Demo>
    
    
    <div className='childhome'>
      <div className='lefthome'>
        <h1>BARGAIN <br></br> BUCKET MENU <br></br>CAMPAIGNS</h1>
        <p>Original Recipes chicken and fries, and plenty of it.<br/> Sometime that's all you need to turn an average<br></br>day into a great one</p>
        <button>ORDER NOW</button>

      </div>
      <div className='righhome'>
        <div className='redbox'>
          <img src='kfc_main.png'></img>
        </div>
        
       
        

      </div>

    </div>
    </div>
    <div className='menuunder'>
      <button>MENUS</button>
      <div className='products'>
        
      
      <Product 
      title="Kids Menu"
      img="menu1.png"
      /> 
       <Product 
      title ="KFC Special"
      img="menu2.png"
      /> 
       <Product 
      title="Box Meal"
      img="menu3.png"
      /> 
       <Product 
      title="Meal"
      img="menu4.png"
      /> 
       <Product 
      title="Bucket"
      img="menu5.png"
      /> 
       <Product 
      title="Chicken"
      img="menu6.png"
      /> 
       <Product 
      title="Sauces"
      img="menu7.png"
      /> 
       <Product 
      title="Drinks"
      img="menu8.png"
      /> 
       <Product 
      title="Sides"
      img="menu9.png"
      /> 
     
       

      
        
      </div>
    </div>

    <div className='productCard'>
      <div className='productcard1' >
      <Productcard
      head="ANY Day OFFER"
      para="NEW PHENOMENON BURGER TASTE"
      value="12.90TL"
      img="card1.png"
      icon="iconcard.png"
      
      
      />
       <Productcard
      head="OTHER FLAVOUR"
      para="SAVE ROOM WE MADE COOKIES"
      value="3.90TL"
      img="card2.png"
      icon="iconcard.png"
      
      
      />
       <Productcard
      head="FIND A KFC STORE NEAR YOU"
      para=""
      value=""
      img="card3.png"
      icon="iconcard.png"
      
      
      />
        
      
        
  
      </div>
      


    </div>
    <div className='productcard21'>
      <Productcard2
      title1="CRISPY AND MASTER CHICKEN CHEF"
      button="100% REAL CHICKEN "
      img="card4.png"
      />
      <Productcard2
      title1="DO YOU WANT TO BE AHOPE CUSTOMER"
      button="SEE MORE "
      img="card4.png"
      />

    </div>
    <div className='kfcimg'>
      <div className="kfcleft">
        <img src='app.png' alt=""/>
        

      </div>
      <div className='kfcright'>
        <h2> Now With Your Favorite<br></br>KFC Mobile Appliction<br></br>In Your Pocket</h2>
        <div className='bt1'>
          <div className='bt45'>
          <a href=''>
          <img src='apple.png'/>
          </a>
          <a href=''>
          <img src='anidroid.png'/>
          </a>
          
           </div>
           </div>

      </div>
    </div>

    <div className='social'>

      <div className='social1'>

      <div className='leftsocial'>
        <div className='topsocial'>

          <Social
          img="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
          title="Shubham Jadhav"
          para="@lovekfc Lorem ipsum dolor sit amet, adipisicing aliqua."
          
          />
          <Social
          img="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
          title="Harshad Gaikwad"
          para="@lovekfc Lorem ipsum dolor sit amet, adipisicing aliqua."
          
          />






        </div>
        <div className='bottomsocial'>

          <Bottomsocial
          img="https://img.icons8.com/?size=100&id=20419&format=png&color=000000"
          img2="social_chicken.jpg"

          />
          <Bottomsocial
          img="https://img.icons8.com/?size=100&id=13963&format=png&color=000000"
          title="Harshad Gaikwad"
          para="@lovekfc Lorem ipsum dolor sit amet, adipisicing aliqua."
           />
           <Bottomsocial
          img="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
          title="Harshad Gaikwad"
          para="@lovekfc Lorem ipsum dolor sit amet, adipisicing aliqua."
           />



        </div>

        </div>


        <div className='rightsocial'>
          <div className='r1'>
          <video width="350" height="220" controls autoPlay >
<source src="video.mp4" type="video/mp4"/>
</video>


          </div>
        </div>


      </div>

      


    </div>

    <div className='footlast'>
      <img src='logo.png'/>
      <div className='phone'>
        <img src='whatsapp.png'/>
        <h5>+9983832674</h5>

      
      </div>
      <div className='phone'>
      <img src='store.png'/>
      <h5>+9175432124</h5>
      
      </div>

      <div className='iconfo'>
        <img src='facebook.png'/>
        <img src='instagram.png'/>
        <img src='youtube.png'/>
        <img src='whatsapp.png'/>
      </div>



    </div>


    <div className='footer'>

      <div className='footer1'>

        <ul className='cardf1'>
          <li className='cardheadf1'>About</li> 
          <li>Contact Us</li>
          <li>Legal</li>
          <li>Tracking Tags</li>
          <li>Privacy</li>


        </ul>
        <ul className='cardf2'>
          <li></li>
          <li>Franchising</li>
          <li>Responsibility
          </li>
          <li>How Kfc Makes Chicken</li>
          <li></li>
        </ul>
        <ul className='cardf3'>
          <li>SITE MAP</li>
          <li>Home</li>
          <li>Store Locator</li>
          <li>Tracking Tags</li>
          <li>Privacy</li>
          <li></li>
        </ul>
        <ul className='cardf4'>
          <li>NUTRITION</li>
          <li>Full Nutrition</li>
          <li>Food Allergies And Senitivities</li>
          <li></li>
        </ul>

      </div>
      <div className='footimg'>
        <img src='kfc_brand.png'/>

      </div>


    </div>


    

        </div>

       
       


      





    

    

    

    
   
   

   
  

   
  
    
    
   
  );
}

export default App;
