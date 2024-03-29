import CountryFlags from "../components/CountryFlags";
import RegionsFlags from "../components/RegionFlags";
import Global from "../components/global";
import Divfooter4 from "../components/Divfooter4";
import DivfooterSub from "../components/DivfooterSub";
import "./WwwmontyesimcomByHtmltod4.css";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import { useState, useEffect } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import axios from 'axios';
// import { count } from "console";

const animatedComponents = makeAnimated();
// const countryOptions = [
//   { value: 'AF', label: 'Afghanistan' },
//   { value: 'AX', label: 'Aland Islands' },
//   { value: 'AL', label: 'Albania' },
//   { value: 'DZ', label: 'Algeria' },
//   { value: 'AS', label: 'American Samoa' },
//   { value: 'AD', label: 'Andorra' },
//   { value: 'AO', label: 'Angola' },
//   { value: 'AI', label: 'Anguilla' },
//   { value: 'AQ', label: 'Antarctica' },
//   { value: 'AG', label: 'Antigua and Barbuda' },
//   { value: 'AR', label: 'Argentina' },
//   { value: 'AM', label: 'Armenia' },
//   { value: 'AW', label: 'Aruba' },
//   { value: 'AU', label: 'Australia' },
//   { value: 'AT', label: 'Austria' },
//   { value: 'AZ', label: 'Azerbaijan' },
//   { value: 'BS', label: 'Bahamas' },
//   { value: 'BH', label: 'Bahrain' },
//   { value: 'BD', label: 'Bangladesh' },
//   { value: 'BB', label: 'Barbados' },
//   { value: 'BY', label: 'Belarus' },
//   { value: 'BE', label: 'Belgium' },
//   { value: 'BZ', label: 'Belize' },
//   { value: 'BJ', label: 'Benin' },
//   { value: 'BM', label: 'Bermuda' },
//   { value: 'BT', label: 'Bhutan' },
//   { value: 'BO', label: 'Bolivia' },
//   { value: 'BQ', label: 'Bonaire, Sint Eustatius and Saba' },
//   { value: 'BA', label: 'Bosnia and Herzegovina' },
//   { value: 'BW', label: 'Botswana' },
//   { value: 'BV', label: 'Bouvet Island' },
//   { value: 'BR', label: 'Brazil' },
//   { value: 'IO', label: 'British Indian Ocean Territory' },
//   { value: 'BN', label: 'Brunei Darussalam' }
// ]
const WwwmontyesimcomByHtmltod4 = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [search, setsearch] = useState([]);
  const [countryOptions, setcountryOptions] = useState([])
  useEffect(() => {
    const getCountries = async () => {
      try {
        const result = await axios.get('http://localhost:3001/api/Countries');
        setData(result.data);
        // setIsPending(false);
        setcountryOptions(result.data.countries.map((item) => ({
          value: item.iso3_code, 
          label: item.country_name 
        })));
      } catch (error) {
        console.error(`Error occurred while fetching data: ${error}`);
        // setIsPending(false);
      }

    };
    getCountries();
    
  }, []);
  useEffect(() => {
  const tabs = document.querySelectorAll('.tab-1');
   
    if (location.pathname === "/plans") {
      tabs.forEach(btn => {
        btn.classList.remove('t-r-s-v-g');
        btn.classList.add('button1');
      });
      tabs[0].classList.remove('button1');
      tabs[0].classList.add('t-r-s-v-g');
    }else if (location.pathname === "/plans/region-esim") {
      tabs.forEach(btn => {
        btn.classList.remove('t-r-s-v-g');
        btn.classList.add('button1');
      });
      tabs[1].classList.remove('button1');
      tabs[1].classList.add('t-r-s-v-g');
     
    }else if (location.pathname === "/plans/global-esim") {
      tabs.forEach(btn => {
        btn.classList.remove('t-r-s-v-g');
        btn.classList.add('button1');
      });
      tabs[2].classList.remove('button1');
      tabs[2].classList.add('t-r-s-v-g');
     
    }
  }, [location]);

  // function toggleTab(e) {
  //   const tabs = document.querySelectorAll('.tab-1');
  //   tabs.forEach(btn => {
  //     btn.classList.remove('t-r-s-v-g');
  //     btn.classList.add('button1');
  //   });
  //   e.currentTarget.classList.remove('button1');
  //   e.currentTarget.classList.toggle('t-r-s-v-g');
  // }
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = async (options) => {
    if (options && options.length > 3) {
      return;
    }

    setSelectedOptions(options);

    const countryNames = options.map(option => option.value);
    console.log(countryNames);
    if(countryNames.length > 0){ 
      try {
      const result = await axios.get('http://localhost:3001/api/AllCountries', {
        params: {
          countries_req: countryNames
        }
      });
      setsearch(result.data);
      // setIsPending(false);
    } catch (error) {
      console.error(`Error occurred while fetching data: ${error}`);
      // setIsPending(false);
    }}
    else{
      setsearch([]);
    }
  };
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  // console.log(search.length);
  return (
    <div className="wwwmontyesimcom-by-htmltod5">
      <Navigation1 />
      <main className="search-frame">
        <div className="button-group-frame">
          <div className="country-region-frame">
            <div className="popular-countries-frame">
              <div className="row-frame-with-cards">
                <h1 className="heading-12">Choose your plan</h1>
              </div>
              <div className="footer-frame">
                <div className="please">{`Please `}</div>
                <b className="dial-06">dial *#06#</b>
                <div className="check-device-comp">
                  <div className="your-device">
                    <div className="to-check-device">
                      to check device compatibility, if EID exist then
                    </div>
                  </div>
                  <div className="your-device-is">
                    your device is compatible
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-link-frame">
              <div className="buttons-frame">
                <div className={isActive ? 'searchicon-active' : 'searchicon'} >
                  <img
                    className="searchicon5548a86csvg"
                    loading="eager"
                    alt=""
                    src="/searchicon5548a86csvg.svg"
                    onClick={toggleClass}
                  />
                  {/* <input type="text" name="" id="" /> */}
                  <Select
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    // defaultValue={[colourOptions[4], colourOptions[5]]}
                    isMulti
                    options={countryOptions}
                    value={selectedOptions}
                    onChange={handleChange}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                        borderRadius: '25px',
                        border: 'none',
                        outline: 'none',
                        boxShadow: state.isFocused ? 0 : 0, // this will remove the blue border
                        '&:hover': {
                          border: 'none', // this will remove the border on hover
                        }
                      }),
                    }}

                    className="input"

                  />
                </div>
                <div className="divtabs-plans">

                  <button className="t-r-s-v-g tab-1" onClick={(e) => {
                    // toggleTab(e);
                    navigate("/plans");
                  }}>
                    <b className="countries">
                      Countries
                    </b>
                  </button>


                  <button className="button1 tab-1" onClick={(e) => {
                    // toggleTab(e);
                    navigate("/plans/region-esim");
                  }}>
                    <b className="regions">Regions</b>
                  </button>


                  <button className="button1 tab-1" onClick={(e) => {
                    // toggleTab(e);
                    navigate("/plans/global-esim");
                  }}>
                    <b className="global">Global</b>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
        {(search.length === 0) && <Routes>
          <Route path="" element={<CountryFlags isHome={false}/>} />
          <Route path="region-esim" element={<RegionsFlags />} />
          <Route path="global-esim" element={<Global />} />
        </Routes>}
        {(search.length > 0) && <Global search={search} />}

        <Divfooter4 />
        <DivfooterSub />
      </main>
    </div>
  );
};

export default WwwmontyesimcomByHtmltod4;
