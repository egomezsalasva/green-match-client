import React from 'react'
import styled from 'styled-components'
// import {ProductsContext} from '../contexts/ProductsContext'
// import coffeePlaceholder from '../imgs/quest1.png'
import arrowIcon from '../imgs/caretIcon.svg'
import terreDiCannabisSantaVerde from '../imgs/products/terreDiCannabis-santaVerde.png'
import terreDiCannabisRiservaOpulenta from '../imgs/products/terreDiCannabis-riservaOpulenta.png'
import theTreeAmnesia from '../imgs/products/theTree-amnesia.png'
import productDummy from '../imgs/productDummy.png'


const QuestionsContainer = styled.div`
    .pageWrapper{
        .browseContainer{
            /* padding: 0 24px; */
            padding: 0 34px;
            max-width: 1440px;
            margin: 16px auto 120px;
            color: #1D7260;

            .browseHeaderWrapper{
                display: flex;
                justify-content: space-between;
                align-items: stretch;

                .browseHeaderTextWrapper{
                    flex: 2;

                    .header{
                        font-size: 48px;
                        line-height: 1;
                        margin-bottom: 2px;
                        margin-top: 1px;
                        font-weight: normal;
                    }
                    .subheader{
                        margin: 20px 0;
                        font-size: 18px;
                        line-height: 1.3333;
                        font-weight: normal;
                    }
                }
            }

            .browseContentWrapper{
                display: flex;
                margin-bottom: 100px;

                .leftFilter{
                    display: block;
                    max-width: 330px;
                    width: 100%;
                    
                    .filterHeader{
                        
                        display: flex;
                        flex: 1;
                        height: 60px;
                        justify-content: space-between;
                        align-items: center;

                        .filterTitle{
                            display: flex;
                            align-items: center;

                            span{
                                font-size: 24px;
                                line-height: 60px;
                            }
                        }

                        .clearButton{
                            position: relative;
                            top: 6px;
                            cursor: pointer;
                            font-size: 14px;
                            line-height: 60px;
                            opacity: 0.75;
                        }
                    }

                    .filterWrapper{
                        width: 100%;
                        margin-top: 40px;

                        .filterAccordion{
                            border-bottom: 1px solid #FFB24B;

                            &:first-of-type{
                                border-top: 1px solid #FFB24B;
                            }

                            .accordionToggle{
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                height: 80px;
                                padding-right: 15px;
                                cursor: pointer;

                                .title{
                                    font-size: 15px;
                                    line-height: 1.3333;
                                }

                                .toggleIcon{
                                    height: 12px;
                                    position: relative;
                                    width: 12px;
                                    top: 4px;

                                    &::before{
                                        background-color: #1D7260;
                                        content: '';
                                        display: block;
                                        height: 2px;
                                        left: -2px;
                                        position: absolute;
                                        top: 2px;
                                        width: 12px;
                                        z-index: 2;
                                        transition: transform ease-in-out 0.5s;
                                    }
                                    &::after{
                                        background-color: #1D7260;
                                        content: '';
                                        display: block;
                                        height: 12px;
                                        left: 3px;
                                        position: absolute;
                                        top: -3px;
                                        width: 2px;
                                        z-index: 1;
                                        transition: transform ease-in-out 0.5s;
                                    }
                                }
                            }
                        }
                    } 
                }

                .productContent{
                    /* padding-left: 20px; */
                    padding-left: 30px;
                    width: 100%;

                    .filterStatusBar{
                        display: flex;
                        flex: 2;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0 4px;
                        height: 60px;

                        .filterQuantity{
                            position: relative;
                            top: 4px;
                            font-size: 18px;
                            line-height: 60px;
                        }

                        .sortControl{
                            display: flex;
                            align-items: center;
                            position: relative;

                            .sortTitle{
                                font-size: 24px;
                                line-height: 60px;
                                display: inline-block;
                                max-width: 100%;
                                margin-bottom: 5px;
                                font-weight: 700;
                            }

                            .sortSelect{
                                height: 40px;
                                border: 1px solid #1D7260;
                                background-color: transparent;
                                border-radius: 4px;
                                margin-left: 24px;
                                padding-right: 40px;
                                padding-left: 12px;
                                font-size: 18px;
                                line-height: 1.3333;
                                appearance: none;
                                text-transform: none;
                                outline: none;
                            }

                            .arrowIcon{
                                position: absolute;
                                right: 3px;
                                top: 12px;
                                z-index: -1;
                            }
                        }
                    }

                    .productCardContainer{
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 40px;
                        max-width: 1170px;

                        .card{
                            width: 100%;
                            max-width: 32%;
                            padding: 0 12px;
                            margin-bottom: 60px;

                            .cardContentWrapper{
                                border-radius: 4px;
                                height: 100%;
                                border-radius: 4px;
                                box-shadow: inset 0 0 0 1px #FFB24B;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                position: relative;
                                text-align: center;

                                a{
                                    display: block;
                                    height: 100%;
                                    left: 0;
                                    position: absolute;
                                    top: 0;
                                    width: 100%;
                                    z-index: 2;
                                }


                                .productImageWrapper{
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border-top-left-radius: 4px;
                                    border-top-right-radius: 4px;
                                    height: 360px;
                                    overflow: hidden;

                                    img{
                                        bottom: 0;
                                        height: 100%;
                                        height: 360px;
                                        position: relative;
                                        transition: bottom 250ms ease;
                                        width: auto;
                                        z-index: 1;
                                    }
                                }

                                .textContent{
                                    border: none;
                                    text-align: left;
                                    padding: 16px 16px 40px;

                                    .header{
                                        padding-bottom: 16px;
                                        border-bottom: 1px solid #FFB24B;
                                        /* color:  #2C2490; */
                                        font-size: 24px;
                                        line-height: 1.1667;
                                        text-align: left;
                                    }

                                    .productBrand{
                                        padding-top: 16px;
                                        text-transform: uppercase;
                                        margin-bottom: 4px;
                                        font-size: 15px;
                                        line-height: 1.3333;
                                        text-align: left; 
                                    }

                                    .productName{
                                        font-size: 24px;
                                        line-height: 1.1667;
                                        margin-bottom: 10px;
                                    }

                                    .productPriceWrapper{
                                        align-items: center;
                                        display: flex;
                                        font-size: 16px;
                                        margin-top: 5px;

                                        .productPriceContainer{
                                            text-align: left;
                                            /* color:  #2C2490; */

                                            .productPrice{
                                                font-size: 16px;
                                            }

                                            .perGram{
                                                font-size: 12px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } 
`


const Shop = () => {

  return (
    <QuestionsContainer>
        <div className="pageWrapper">
            <div className="browseContainer">
                <div className="spinner">
                    <div className="browseHeaderWrapper">
                        <div className="browseHeaderTextWrapper"> 
                            <h1 className="header">Our CBD Selection</h1>
                            <h2 className="subheader">Choose from a wide variety of CBD Flowers from the top growers in Europe. All CBD is packed discretely and shipped to your door.</h2>
                        </div>
                    </div>
                    <div className="browseContentWrapper">
                        <div className="leftFilter">
                            <div className="filterHeader">
                                <div className="filterTitle">
                                    <span>Filter</span>
                                </div>
                                <div className="clearButton">Clear</div>
                            </div>
                            <div className="filterWrapper">
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">Potency Level</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">CBD Tastes Like</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">Price</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">Country</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">Grower</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">Type</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">Strain</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">Bag Weight</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">Growing Method</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                                <div className="filterAccordion">
                                    <div className="accordionToggle">
                                        <div className="title">Organic</div>
                                        <div className="toggleIcon"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="productContent">
                            <div>
                                <div className="filterStatusBar">
                                    <div className="filterQuantity">100 CBD Flowers</div>
                                    <span className="sortControl">
                                        <label for="catalog-sort-select" class="sortTitle">Sort</label>
                                        <select id="catalog-sort-select" className="sortSelect">
                                            {/* <option value></option> */}
                                            <option selected value="score-desc">Relevance</option>
                                            <option value="orders-score-desc">Most Popular</option>
                                            <option value="created-at-desc">New</option>
                                            <option value="price-desc">Highest Price</option>
                                            <option value="price-asc">Lowest Price</option>
                                        </select>
                                        <img className="arrowIcon" src={arrowIcon} alt="arrow" />
                                    </span>
                                </div>
                                <div className="productCardContainer">

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={terreDiCannabisSantaVerde} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Fruity</div>
                                                <div className="productBrand">Terre Di Cannabis</div>
                                                <div className="productName">Santa Verde</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€6.99 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={terreDiCannabisRiservaOpulenta} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Earthy</div>
                                                <div className="productBrand">Terre Di Cannabis</div>
                                                <div className="productName">Riserva Opulenta</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7.60 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={theTreeAmnesia} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Citric</div>
                                                <div className="productBrand">The Tree</div>
                                                <div className="productName">Amnesia</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7.65 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="cardContentWrapper">
                                            {/* <a className="productLink" href="/test" data-product-id="1234" /> */}
                                            <div className="productImageWrapper">
                                                <img  src={productDummy} alt="product name"/>
                                            </div>
                                            <div className="textContent">
                                                <div className="header">Sweet & Smooth</div>
                                                <div className="productBrand">Stay Golden</div>
                                                <div className="productName">Paubrasil</div>
                                                <div className="productPriceWrapper">
                                                    <div className="productPriceContainer">
                                                        <span className="productPrice">€7 </span>
                                                        <span className="perGram"> / gram</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </QuestionsContainer>
  )
}
export default Shop
