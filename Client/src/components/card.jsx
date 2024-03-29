import React, { useState } from 'react'
import "./card.css";
import { useNavigate } from "react-router-dom";
export default function card({
  index,
  title,
  price,
  validity,
  country_code,
  gprs_limit,
  category,
  region_name,
  data_unit,
  trsvg,
  isCountry,
  country_iso2_code,
  searching,
  bundle
}) {
  const navigate = useNavigate();
  let cpt;
  if (searching) {
    cpt = trsvg.length - 1
  }
  return (
    <>

      {isCountry && <div key={index} className="divcard">
        <div className="frame-container">
          <div className="supported-country-wrapper">
            <div className="supported-country">
              <div className="div-card">
                <img
                  className="trsvg-icon"
                  loading="eager"
                  alt=""
                  src={(() => {
                    if (category === "global") {
                      return `/Global.svg`
                    } else if (category === "region") {
                      if (region_name === "Europe") {
                        return `/Europe.svg`
                      } else if (region_name === "Asia") {
                        return `/Asia.svg`
                      } else if (region_name === "Africa") {
                        return `/Africa.svg`
                      } else if (region_name === "North America") {
                        return `/North-America.svg`
                      } else if (region_name === "South America") {
                        return `/South-America.svg`
                      } else if (region_name === "Middle East") {
                        return `/Middle-East.svg`
                      }
                    } else if (category === "country") {
                      if (searching) {
                        return `https://flagcdn.com/${trsvg[cpt]}.svg`
                        cpt--
                      } else return trsvg
                    }
                  })()}
                />
                <div className="pbundle-marketing-name-one">
                  <div className="parent-frame1">
                    <b className="mutluluk">{title}</b>
                  </div>
                </div>
              </div>
              <div className="g-b-icon">
                <b className="mb">{gprs_limit} {data_unit}</b>
                <img
                  className="arrow-right2472f8ffsvg-icon"
                  alt=""
                  src="/arrowright2472f8ffsvg.svg"
                />
              </div>
            </div>
          </div>
          <div className="separator3" />
          <div className="product-info">
            <div className="validity-1-days">Validity {validity} Days</div>
            <div className="available-in-parent">
              <div className="available-in">{`Available in `}</div>
              {searching && (cpt > 0) && trsvg.map((item, i) => {
                return (
                  <img
                    key={i}
                    className="trsvg-icon1"
                    alt=""
                    src={`https://flagcdn.com/${item}.svg`}
                  />);
              })
              }
              {searching && cpt === 0 && <img className="trsvg-icon1" alt="" src={`https://flagcdn.com/${trsvg[cpt]}.svg`} />}
              {!searching && <img className="trsvg-icon1" alt="" src={trsvg} />}
            </div>
          </div>
          <div className="divcard1">
            <input
              className="supported-country1"
              placeholder="Supported Country"
              type="text"
            />
            <div className="divcol-md-5-icon">
              {country_iso2_code && country_iso2_code.slice(0, 3).map((item, i) => {
                return (
                  <img
                    key={i}
                    className="trsvg-icon1"
                    alt=""
                    src={`https://flagcdn.com/${item.iso2_code}.svg`}
                  />);
              })

              }
              {country_iso2_code.length > 3 && <div className='DarkMask' onClick={() => {
                document.getElementById(`card-${index}`).style.visibility = 'visible'
                document.getElementById(`card-${index}`).style.height = '150px'
                document.getElementById(`popup-${index}`).style.display = 'block'
              }}>
                <span className='Mask'>{`+${country_iso2_code.length - 3}`}</span>
              </div>}
            </div>
          </div>
          <div className="country_iso2_code" id={`card-${index}`}>
            {country_iso2_code && country_iso2_code.map((item, i) => {
              return <div className="imgCard">
                <img
                  key={i}
                  className="trsvg-icon1"
                  alt=""
                  src={`https://flagcdn.com/${item.iso2_code}.svg`}
                />
                <span>{item.country_name}</span>
              </div>;
            })}
          </div>
          <div className="popup-active" id={`popup-${index}`} onClick={() => {
            document.getElementById(`card-${index}`).style.visibility = 'hidden'
            document.getElementById(`card-${index}`).style.height = '0'
            document.getElementById(`popup-${index}`).style.display = 'none'
            // document.querySelector('.popup-active').style.display = 'none'  
          }}></div>

        </div>
        <div className="button6" onClick={() => {
          document.getElementById(`qst-popup-${index}`).style.display = 'flex'
          setTimeout(() => {
            document.getElementById(`qst-popup-content-$${index}`).classList.add('active')

          }, 8)
        }}>
          <b className="buy-now-">Buy Now - {price} USD</b>
        </div>
        <div className="qst-popup" id={`qst-popup-${index}`} onClick={(e) => {
          if (e.target === e.currentTarget) {
            document.getElementById(`qst-popup-content-$${index}`).classList.remove('active')
            document.getElementById(`qst-popup-${index}`).style.display = 'none'
          }
        }} >

          <div className="qst-popup-content" id={`qst-popup-content-$${index}`}>
            <span className="close" onClick={() => {
              document.querySelector('.qst-popup-content').classList.remove('active')
              document.getElementById(`qst-popup-${index}`).style.display = 'none'

            }}>&times;</span>
            <div className="title-qst">
              <img className='img-qst' src="/qst-check.svg" alt="" />
              <h3>Compatible Device Check</h3>
            </div>
            <p>You’re now going to purchase the {title} <br /> eSIM plan. Are you sure your device is compatible <br /> with eSIM?</p>
            <div className="buttons-qst">
              <button className="button-qst" onClick={() => {
                    navigate('/checkout', { state: { bundle: bundle } })
              }}>Yes, my device is compatible</button>
              <span className="link-qst"
                onClick={() => {
                  document.querySelector('.qst-popup-content').classList.remove('active')
                  document.getElementById(`qst-popup-${index}`).style.display = 'none'
                }}
              >No, I need to check</span>
            </div>
          </div>
        </div>
      </div>}
      {!isCountry && <div key={index} className="divcard">
        <div className="frame-container">
          <div className="supported-country-wrapper">
            <div className="supported-country" id='plans-supported-country'>
              <div className="div-card">
                <img
                  className="trsvg-icon"
                  loading="eager"
                  alt=""
                  src={trsvg}
                />
                <div className="pbundle-marketing-name-one">
                  <div className="parent-frame1">
                    <b className="mutluluk">{title}</b>
                  </div>
                </div>
              </div>
              <div className="g-b-icon">
                <b className="mb">{gprs_limit} {data_unit}</b>
                <img
                  className="arrow-right2472f8ffsvg-icon"
                  alt=""
                  src="/arrowright2472f8ffsvg.svg"
                />
              </div>
            </div>
          </div>
          <div className="separator3" />
          <div className="product-info">
            <div className="validity-1-days">Validity {validity} Days</div>
          </div>
          <div className="divcard1">
            <input
              className="supported-country1"
              placeholder="Supported Country"
              type="text"
              disabled
            />
            <div className="divcol-md-5-icon">
              {country_iso2_code && country_iso2_code.slice(0, 3).map((item, i) => {
                return (
                  <img
                    key={i}
                    className="trsvg-icon1"
                    alt=""
                    src={`https://flagcdn.com/${item.iso2_code}.svg`}
                  />);
              })

              }
              {country_iso2_code && country_iso2_code.length > 3 && <div className='DarkMask' onClick={() => {
                document.getElementById(`card-${index}`).style.visibility = 'visible'
                document.getElementById(`card-${index}`).style.height = '150px'
                document.getElementById(`popup-${index}`).style.display = 'block'
                // document.querySelector('.popup-active').style.display = 'block'
              }}>
                <span className='Mask'>{`+${country_iso2_code.length - 3}`}</span>
              </div>}
            </div>
          </div>
          <div className="country_iso2_code" id={`card-${index}`}>
            {country_iso2_code && country_iso2_code.map((item, i) => {
              return <div className="imgCard">
                <img
                  key={i}
                  className="trsvg-icon1"
                  alt=""
                  src={`https://flagcdn.com/${item.iso2_code}.svg`}
                />
                <span>{item.country_name}</span>
              </div>;
            })}
          </div>
          <div className="popup-active" id={`popup-${index}`} onClick={() => {
            document.getElementById(`card-${index}`).style.visibility = 'hidden'
            document.getElementById(`card-${index}`).style.height = '0'
            document.getElementById(`popup-${index}`).style.display = 'none'
            // document.querySelector('.popup-active').style.display = 'none'  
          }}></div>
        </div>

        <div className="button6" id='plans-button6' onClick={() => {
          document.getElementById(`qst-popup-${index}`).style.display = 'flex'
          setTimeout(() => {
            document.getElementById(`qst-popup-content-$${index}`).classList.add('active')

          }, 8)
        }}>
          <b className="buy-now-">Buy Now - {price} USD</b>
        </div>
        <div className="qst-popup" id={`qst-popup-${index}`} onClick={(e) => {
          if (e.target === e.currentTarget) {
            document.getElementById(`qst-popup-content-$${index}`).classList.remove('active')
            document.getElementById(`qst-popup-${index}`).style.display = 'none'
          }
        }} >

          <div className="qst-popup-content" id={`qst-popup-content-$${index}`}>
            <span className="close" onClick={() => {
              document.querySelector('.qst-popup-content').classList.remove('active')
              document.getElementById(`qst-popup-${index}`).style.display = 'none'

            }}>&times;</span>
            <div className="title-qst">
              <img className='img-qst' src="/qst-check.svg" alt="" />
              <h3>Compatible Device Check</h3>
            </div>
            <p>You’re now going to purchase the {title} <br /> eSIM plan. Are you sure your device is compatible <br /> with eSIM?</p>
            <div className="buttons-qst">
              <button className="button-qst" onClick={() => {
                    navigate('/checkout', { state: { bundle: bundle } })
              }}>Yes, my device is compatible</button>
              <span className="link-qst" onClick={() => {
                document.querySelector('.qst-popup-content').classList.remove('active')
                document.getElementById(`qst-popup-${index}`).style.display = 'none'

              }}>No, I need to check</span>
            </div>
          </div>
        </div>
      </div>}

    </>

  )
}
