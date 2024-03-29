import Divcard from "./Divcard";
import "./CountryFlags.css";
import { useState, useEffect } from "react";
import Collapsible from "./collapse";
import axios from 'axios';
import {
  useCollapse
} from "react-collapsed";
import { useNavigate } from "react-router-dom";
import { loginAgent, RefreshToken, getAllCountry, getAllBundles } from './functions';
import { Buffer } from "buffer";

const CountryFlags = ({
  isHome
}) => {

  const navigation = useNavigate();
  const [i, seti] = useState(12)
  const [isPop, setisPop] = useState(true)
  const [expandedIndex, setexpandedIndex] = useState(null)
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const fetchCountries = async () => {
      try {
        const result = await axios.get(apiUrl + 'Countries');
        // console.log(result.data)  
        setData(result.data.countries);
        setIsPending(false);
      } catch (error) {
        console.error(`Error occurred while fetching data: ${error}`);
        setIsPending(false);
      }
    };
    const fetchPopCountries = async () => {
      try {
        const result = await axios.get(apiUrl + 'AllCountries', {
          params: {
            countries_req: ["USA", "GBR", "TUR", "DEU", "FRA", "ITA", "ESP", "RUS", "BRA", "IND", "CHN", "JPN"]
          }
        });
        setData(result.data);
        setIsPending(false);
      } catch (error) {
        console.error(`Error occurred while fetching data: ${error}`);
        setIsPending(false);
      }

    };

    (isHome) ? fetchPopCountries() : fetchCountries()

    // console.log(data)
  }, []);

// useEffect(() => {
//   console.log(apiUrl)
// }, [apiUrl])
  return (
    <>

      {!isHome && isPending && <div className="country-flags1" style={{ height: "200px", alignItems: "center" }}><div class="loader"></div></div>}
      {!isHome && !isPending && data && <section className="country-flags1">
        <div className="popular-countries-list">
          <h3 className="popular-countries">Popular Countries</h3>
        </div>
        <div className="div-row">
          <div className="divrow16">

            {isPop && data && data.filter(item => [
              "USA", "GBR", "TUR", "DEU", "FRA", "ITA", "ESP", "RUS", "BRA", "IND", "CHN", "JPN"
            ].includes(item.iso3_code)).map((item, index) => {
              return (
                <Collapsible
                  index={index}
                  trsvg={`https://flagcdn.com/${item.iso2_code.toLowerCase()}.svg`}
                  turkey={item.country_name}
                  bundles={false}
                  isCountry={true}
                  searching={false}
                  expandedIndex={expandedIndex}
                  setExpandedIndex={setexpandedIndex}
                  iso3_code={item.iso3_code}
                  isHome={isHome}
                />
              );
            })}
            {!isPop && data && data.map((item, index) => {
              return (
                <Collapsible
                  index={index}
                  trsvg={`https://flagcdn.com/${item.iso2_code.toLowerCase()}.svg`}
                  turkey={item.country_name}
                  bundles={false}
                  isCountry={true}
                  searching={false}
                  expandedIndex={expandedIndex}
                  setExpandedIndex={setexpandedIndex}
                  iso3_code={item.iso3_code}
                  isHome={isHome}
                />
              );
            })}

            <img
              className="whatsapp-logo6d974d7esvg-icon6"
              loading="eager"
              alt=""
              src="/whatsapplogo6d974d7esvg4@2x.png"
              onClick={() => {
                window.open("https://api.whatsapp.com/send/?phone=212671757830")
              }}
            />
          </div>
          <button className="button19" onClick={(e) => {
            // seti(data.length);
            setisPop(false);
            e.currentTarget.style.display = 'none';
            document.querySelector('.popular-countries-list').style.display = 'none';
          }}>
            <b className="view-all-countries1" >View all countries</b>
          </button>
        </div>
      </section>}

      {isHome && isPending && <div className="country-flags1" style={{ height: "500px", alignItems: "center", padding: "100px" }}><div class="loader"></div></div>}
      {isHome && !isPending && data &&
        <div className="div-row">
          <div className="divrow16">

            {data && data.slice(0, i).map((item, index) => {
              return (
                <Collapsible
                  index={index}
                  trsvg={`https://flagcdn.com/${item.iso2_code.toLowerCase()}.svg`}
                  turkey={item.country_name}
                  bundles={item.bundles}
                  isCountry={true}
                  searching={false}
                  expandedIndex={expandedIndex}
                  setExpandedIndex={setexpandedIndex}
                  isHome={isHome}
                
                />
              );
            })}
          </div>
          <button className="button19" onClick={(e) => {
            navigation('/plans')
            // seti(data.length);
            // e.currentTarget.style.display = 'none';
            // document.querySelector('.popular-countries-list').style.display = 'none';
          }}>
            <b className="view-all-countries1" >View all countries</b>
          </button>
        </div>}
    </>
  );
};

export default CountryFlags;
