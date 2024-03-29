import "./MontyeSIMBenefits.css";

const MontyeSIMBenefits = () => {
  return (
    <section className="montye-s-i-m-benefits">
      <div className="montye-s-i-m-providers">
        <div className="connectivity-icon">
          <div className="paris-window-icon">
            <img
              className="pariswindow8faf04c0svg-icon"
              loading="eager"
              alt=""
              src="/pariswindow8faf04c0svg@2x.png"
            />
          </div>
          <div className="monty-esim-provides-container">
            <p className="monty-esim-provides">
              Monty eSIM provides the best connectivity you can ask for,
            </p>
            <p className="whether-youre-a">
              whether you’re a regular traveler, or just someone enjoying their
            </p>
            <p className="vacation-you-can">
              vacation. You can now download up to 10 eSIM profiles using our
            </p>
            <p className="app-with-any">
              app, with any compatible device, wherever you may be around
            </p>
            <p className="the-world">the world!</p>
          </div>
          <div className="monty-uk-global-container">
            <p className="monty-uk-global">
              Monty UK Global limited, a company incorporated under the
            </p>
            <p className="laws-of-england">
              laws of England and Wales with registration number No.8632740
            </p>
            <p className="and-vat-169296852">
              and VAT 169296852 having its registered office at Bridge House,
            </p>
            <p className="queen-victoria-street3">
              181 Queen Victoria Street, London EC4V 4EG, United Kingdom.
            </p>
          </div>
        </div>
        <div className="footer-link-bar">
          <div className="whats-app-logo2">
            <h1 className="stay-connected-with-container">
              <span className="stay-connected-with-container1">
                <p className="stay">Stay</p>
                <p className="connected">Connected</p>
                <p className="with-monty">with Monty</p>
                <p className="esim">eSIM</p>
              </span>
            </h1>
            <div className="mobile-info-frame">
              <div className="hot-balloon-icon">
                <img
                  className="hotballoon370e73b8svg-icon"
                  loading="eager"
                  alt=""
                  src="/hotballoon370e73b8svg@2x.png"
                />
                <img
                  className="whatsapp-logo6d974d7esvg-icon3"
                  alt=""
                  src="/whatsapplogo6d974d7esvg@2x.png"
                  onClick={() => {
                    window.open("https://api.whatsapp.com/send/?phone=212671757830");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MontyeSIMBenefits;
