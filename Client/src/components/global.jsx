import React, {useState , useEffect} from 'react'
import "./CountryFlags.css";
import Card from "../components/card";
import axios from 'axios';

export default function global({
    search
}) {
// console.log(search);    
const [searching, setsearching] = useState(false)
    const [iso2code, setiso2code] = useState([]);
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        const fetchGlobal = async () => {
            
            try {
                const result = await axios.get('http://localhost:3001/api/Global');
                setData(result.data);
                setIsPending(false);
            } catch (error) {
                console.error(`Error occurred while fetching data: ${error}`);
                setIsPending(false);
            }
        
            // console.log(data);
        };
        if (!search || search.length <= 0) fetchGlobal()
        // console.log(search);    
    }, []);
    useEffect(() => {
        if (search && search.length > 0) {
            setsearching(true);
            setTimeout(() => {
                setIsPending(false);
            }, 500);
            let commonBundles = [];
            let iso2Codes = [];
            search.forEach((item, index) => {
                
                iso2Codes.push(item.iso2_code.toLowerCase());
                if (index === 0) {
                    // For the first item, add all bundles to commonBundles
                    commonBundles = [...item.bundles];
                } else {
                    // For subsequent items, filter commonBundles to only include bundles that are also in the current item's bundles
                    commonBundles = commonBundles.filter(bundle =>
                        item.bundles.some(b => JSON.stringify(b) === JSON.stringify(bundle))
                    );
                }
            });
            setiso2code(iso2Codes);
            setData(commonBundles);
            setIsPending(true);
        }
    }, [search]);
    function getUnique(arr, comp) {
        const unique = arr
          .map(e => e[comp])
          .map((e, i, final) => final.indexOf(e) === i && i)
          .filter(e => arr[e])
          .map(e => arr[e]);
      
        return unique;
      }
    return (
        <>
        {isPending && <div className="country-flags1" style={{ height: "200px", alignItems: "center" }}><div class="loader"></div></div>}
        {!isPending && data && <section className="separator-parent">
            <div className="framearrowrightfffsvg-frame" style={{
                justifyContent: "center",
            }}>
                {!searching && data && data.map((bundle, index) => {
                    // if (bundle.bundle_category !== "global" ) {

                    return (
                        <Card
                            index={index}
                            trsvg={'/Global.svg'}
                            title={bundle.bundle_marketing_name}
                            price={bundle.subscriber_price}
                            validity={bundle.validity}
                            category={bundle.bundle_category}
                            region_name={bundle.region_name}
                            country_code={bundle.country_code}
                            gprs_limit={bundle.gprs_limit}
                            data_unit={bundle.data_unit}
                            country_iso2_code={bundle.country_iso2_code}
                            isCountry={false}
                            searching={searching}
                            bundle={bundle}
                        />
                    )
                })}

                {searching && data && getUnique(data, 'gprs_limit').map((bundle, index) => {
                    // if (bundle.bundle_category !== "global" ) {

                    return (
                        <Card
                            index={index}
                            trsvg={(search && search.length > 0) ? iso2code : '/Global.svg'}
                            title={bundle.bundle_marketing_name}
                            price={bundle.subscriber_price}
                            validity={bundle.validity}
                            category={bundle.bundle_category}
                            region_name={bundle.region_name}
                            country_code={bundle.country_code}
                            gprs_limit={bundle.gprs_limit}
                            data_unit={bundle.data_unit}
                            country_iso2_code={bundle.country_iso2_code}
                            isCountry={(search && search.length > 0) ? true : false}
                            searching={searching}
                            bundle={bundle}
                        />
                    )
                    // }
                }
                )}


                {data.length === 0 && <div className="no-results" style={{ height: "200px"}}></div>}
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
        </section>}
        </>
    )
}
