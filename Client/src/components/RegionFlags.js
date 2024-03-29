import Divcard from "./Divcard";
import "./CountryFlags.css";
import { useState, useEffect } from "react";
import Collapsible from "./collapse";
import axios from 'axios';
import {
  useCollapse
} from "react-collapsed";


const CountryFlags = ({
  isCountry
}) => {

  const [expandedIndex, setexpandedIndex] = useState(null)
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {

    const fetchRegions = async () => {
      try {
        const result = await axios.get('http://localhost:3001/api/AllRegions');
        setData(result.data);
        setIsPending(false);
      } catch (error) {
        console.error(`Error occurred while fetching data: ${error}`);
        setIsPending(false);
      }

      // console.log(data);
    };
    fetchRegions()
  }, []);

  // const handleToggle = (index) => {
  //   setexpand(index === expand ? null : index);
  // };
  return (
      <>
        {isPending && <div className="country-flags1" style={{ height: "200px", alignItems: "center" }}><div class="loader"></div></div>}
        {!isPending && data && <section className="country-flags1">
          <div className="div-row">
            <div className="divrow16">

              {data && data.map((item, index) => {
                return (
                  <Collapsible
                    index={index}
                    trsvg={`/${item.image}`}
                    turkey={item.region_name}
                    bundles={item.bundles}
                    isCountry={false}
                    searching={false}
                    expandedIndex={expandedIndex}
                    setExpandedIndex={setexpandedIndex}
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
           
          </div>
        </section>}
      </>

  );
};

export default CountryFlags;
