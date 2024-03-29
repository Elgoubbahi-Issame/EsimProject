import React, { useEffect, useState } from 'react'
import { useCollapse } from 'react-collapsed';
import "./collapse.css"
import Divcard from "./Divcard";
import Card from "./card";
import "./CountryFlags.css";
import axios from 'axios';

export default function Collapsible({
    index,
    trsvg,
    turkey,
    bundles,
    isCountry,
    expandedIndex,
    setExpandedIndex,
    isHome,
    iso3_code,
}
) {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const apiUrl = process.env.REACT_APP_API_URL;

    const fetchCountries = async () => {
        try {
            const result = await axios.get(apiUrl + 'AllCountries', {
                params: {
                    countries_req: [iso3_code]
                }
            });
            console.log(result.data, 'data')
            setData(result.data[0].bundles);
            setIsPending(false);
        } catch (error) {
            console.error(`Error occurred while fetching data: ${error}`);
            setIsPending(false);
        }

    };
    function getUnique(arr, comp1, comp2) {
        const unique = arr
            .map(e => `${e[comp1]}_${e[comp2]}`) // Combine the two properties into a string
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => arr[e])
            .map(e => arr[e]);

        return unique;
    }

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        isExpanded: expandedIndex === index,
        onCollapseEnd: () => { if (expandedIndex === index) setExpandedIndex(null); },
        easing: 'cubic-bezier(0.5, 0.5, 0.5, 0.3)',
        duration: 250
    });


    return (
        <>
            <div className="header" {...getToggleProps()} onClick={() => {
                setExpandedIndex(isExpanded ? null : index)
                if (isCountry && !isHome) fetchCountries()
                else setData(bundles)
            }}>
                <Divcard trsvg={trsvg} turkey={turkey} after="/after@2x.png" isExpanded={isExpanded} />
            </div>
            <div className='content' {...getCollapseProps()}>
                <div className="card-grid">
                    {isHome && isCountry && data && getUnique(data, 'validity', 'gprs_limit').map((bundle, i) => {

                        return (
                            <Card
                                index={`${index}-${i}`}
                                trsvg={trsvg}
                                category={bundle.bundle_category}
                                region_name={bundle.region_name}
                                title={bundle.bundle_marketing_name}
                                price={bundle.subscriber_price}
                                validity={bundle.validity}
                                country_code={bundle.country_code}
                                gprs_limit={bundle.gprs_limit}
                                data_unit={bundle.data_unit}
                                country_iso2_code={bundle.country_iso2_code}
                                isCountry={isCountry}
                                bundle={bundle}
                            />
                        )
                    }
                    )}
                    {!isHome && !isPending && isCountry && data && getUnique(data, 'validity', 'gprs_limit').map((bundle, i) => {

                        return (
                            <Card
                                index={`${index}-${i}`}
                                trsvg={trsvg}
                                category={bundle.bundle_category}
                                region_name={bundle.region_name}
                                title={bundle.bundle_marketing_name}
                                price={bundle.subscriber_price}
                                validity={bundle.validity}
                                country_code={bundle.country_code}
                                gprs_limit={bundle.gprs_limit}
                                data_unit={bundle.data_unit}
                                country_iso2_code={bundle.country_iso2_code}
                                isCountry={isCountry}
                                bundle={bundle}
                            />
                        )
                    }
                    )}
                    {!isHome && isCountry && isPending && <div className="country-flags1" style={{ height: "200px", alignItems: "center" }}><div class="loader"></div></div>}
                    {!isCountry && data && data.map((bundle, i) => {

                        return (
                            <Card
                                index={`${index}-${i}`}
                                trsvg={trsvg}
                                title={bundle.bundle_marketing_name}
                                price={bundle.subscriber_price}
                                validity={bundle.validity}
                                country_code={bundle.country_code}
                                gprs_limit={bundle.gprs_limit}
                                data_unit={bundle.data_unit}
                                country_iso2_code={bundle.country_iso2_code}
                                isCountry={isCountry}
                                bundle={bundle}
                            />
                        )
                        // }
                    }
                    )}
                </div>
            </div>
        </>
    )
}

