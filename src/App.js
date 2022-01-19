import { useState, useEffect } from "react";

function App() {

  const [counter, setcounter] = useState(0);

  const [ethPrice, setethPrice] = useState(0);



  function inc() {
    if (counter < 5) {
      setcounter(counter + 1)

    }
    else {
      setcounter(5)


    }

    if (ethPrice === 0) {
      setethPrice(".069")
    }


    if (ethPrice === ".069") {
      setethPrice(".138");
    }



    if (counter === 2) {
      setethPrice(".207")
    }



    if (counter === 3) {
      setethPrice(".276")
    }



    if (counter === 4) {
      setethPrice(".345")
    }








  }

  function decr() {

    if (counter > 0) {
      setcounter(counter - 1)

    }
    else {
      setcounter(0)

    }


    if (ethPrice === ".345") {
      setethPrice(".276")
    }


    if (ethPrice === ".276") {
      setethPrice(".207")
    }


    if (ethPrice === ".207") {
      setethPrice(".138")
    }


    if (ethPrice === ".138") {
      setethPrice(".069")
    }


    if (ethPrice === ".069") {
      setethPrice(0)
    }





  }


  function max() {
    setcounter(5)
    setethPrice(".345")

  }

  return (
    <>
      <div className="header">
        <div className="logo"><img src="/images/LOGO-main.png" alt="" /></div>
        <button className="connectWallet">CONNECT WALLET</button>
      </div>
      <div className="main">




        <h1>MINT YOUR zkAPES</h1>


        <div className="card">

          <div className="cardFlex1">
            <h2 className="aaa">10,000 NFTs</h2>
          </div>

          <div className="cardFlex1">
            <div className="innerCont">
              <h2>MY ETH BALANCE</h2>
              <h3>0 ETH</h3>
            </div>

            <div className="middle">
              <h2>AMOUNT</h2>
              <div className="ggg"><button onClick={decr}>-</button><span>{counter}</span><button onClick={inc}>+</button></div>
              <button className="max" onClick={max}>Max</button>
            </div>


            <div className="innerCont">
              <h2>TOTAL PRICE</h2>
              <h3>{ethPrice} ETH</h3>
            </div>






            <div className="cardFlex1 mainBTN">
              <button>Mint Now</button>
            </div>







          </div>



        </div>














        <div className="darkBackground"></div>
        <img src="/images/mainBG.jpeg" className="background" alt="" />
      </div>

      <div className="footer">
        <p>Copyright © 2022 zkAPES, All Right Reserved</p>
      </div>

    </>
  );
}

export default App;
