require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var axios = require('axios');
const path = require('path');
const fs = require('fs');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const username = process.env.USERNAME_ESIM;
const password = process.env.PASSWORD_ESIM;

const loginAgent = async (username, password) => {
    const data = JSON.stringify({
        username,
        password
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.API_URL + '/Agent/login',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data
    };

    try {
        const response = await axios(config);
        return JSON.stringify(response.data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const RefreshToken = async (refresh_token) => {
    var data = JSON.stringify({
        "refresh_token": refresh_token
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.API_URL + '/Token/Refresh',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: data
    };

    try {
        const response = await axios(config);
        return JSON.stringify(response.data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getAllCountry = async (access_token) => {
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.API_URL + '/AvailableCountries?reseller_admin_view=true',
        headers: {
            'Access-Token': access_token
        }
    };

    try {
        const response = await axios(config);
        return JSON.stringify(response.data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getGlobalBundles = async (access_token) => {
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.API_URL + `/Bundles?bundle_category=global&reseller_admin_view=true`,
        headers: {
            'Access-Token': access_token
        }
    };
    try {
        const response = await axios(config);
        return JSON.stringify(response.data);
    } catch (error) {
        console.error(error);
        throw error;
    }
}
const getAllBundles = async (access_token, iso3_code, retries = 3) => {
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.API_URL + `/Bundles?country_code=${iso3_code}&sort_by=price_asc&reseller_admin_view=true`,
        // url: `https://resellerapi.montyesim.com/api/v0/Bundles?country_code=${iso3_code}&sort_by=price_asc&reseller_admin_view=true`,
        // url: `https://resellerapi.montyesim.com/api/v0/Bundles?country_code=${country_code}&bundle_category=${bundle_category}&page_size=25&page_number=1&bundle_name=${bundle_name}&sort_by=price_asc&reseller_admin_view=true&region_code=${region_code}`,
        headers: {
            'Access-Token': access_token
        }
    };

    while (retries > 0) {
        try {
            const response = await axios(config);
            let bundles = response.data.bundles.filter(bundle => bundle.is_active );
            // let bundles = response.data.bundles.filter(bundle => bundle.is_active && (bundle.bundle_category === 'region' || bundle.bundle_category === 'country'));
            return JSON.stringify({
                bundles: bundles
            });
        } catch (error) {
            retries--;
            if (retries === 0) {
                console.error('Failed to get bundles:', error);
                throw error;
            }
        }
    }
}
const getBundlesOfReg = async (access_token, region_code, region_name) => {
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.API_URL + `/Bundles?sort_by=price_asc&reseller_admin_view=true&region_name=${region_name}&region_code=${region_code}`,
        // url: `https://resellerapi.montyesim.com/api/v0/Bundles?bundle_category=region&bundle_category=global&sort_by=price_asc&reseller_admin_view=true&region_name=${region_name}&region_code=${region_code}`,
        headers: {
            'Access-Token': access_token
        }
    };
    try {
        const response = await axios(config);
        let bundels = response.data.bundles.filter(bundle => bundle.is_active);
        return JSON.stringify({
            bundles: bundels
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getImages = async (folderPath) => {


    try {
        const files = await fs.promises.readdir(folderPath);
        const images = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif' || ext === '.svg';
        });
        return images;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const assingBundle = async (access_token, data) => {

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.API_URL + '/Bundles',
        headers: {
            'Access-Token': access_token
        },
        data: data
    };

    try {
        const response = await axios(config);
        return JSON.stringify(response.data);
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}


// Define your API routes here
app.get('/api/Countries', async (req, res) => {
    // console.log(username, password, 'username, password');
    try {
        const response_1 = JSON.parse(await loginAgent(username, password));
        const response_2 = JSON.parse(await RefreshToken(response_1.refresh_token));
        const { countries } = JSON.parse(await getAllCountry(response_2.access_token));
        res.json({ countries: countries });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/api/Global', async (req, res) => {
    try {
        const response_1 = JSON.parse(await loginAgent(username, password));
        const response_2 = JSON.parse(await RefreshToken(response_1.refresh_token));
        const { countries } = JSON.parse(await getAllCountry(response_2.access_token));
        const { bundles } = JSON.parse(await getGlobalBundles(response_2.access_token));

        bundles.forEach(bundle => {
            const country_iso2_code = []
            bundle.country_code.forEach(country_code => {

                for (let i = 0; i < countries.length; i++) {
                    if (country_code === countries[i].iso3_code) {
                        country_iso2_code.push({ iso2_code: countries[i].iso2_code.toLowerCase(), country_name: countries[i].country_name });
                    }
                }
            });
            bundle.country_iso2_code = country_iso2_code;
        });
        let bundles_updated = bundles.filter(bundle => bundle.is_active);
        res.json(bundles_updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/AllCountries', async (req, res) => {
    const response_1 = JSON.parse(await loginAgent(username, password));
    const response_2 = JSON.parse(await RefreshToken(response_1.refresh_token));
    const { countries } = JSON.parse(await getAllCountry(response_2.access_token));
    const countries_updated = [];
    if (Object.keys(req.query).length > 0) {
        console.log(Object.keys(req.query).length);

        try {
            const { countries_req } = req.query;
            let filteredCountries = countries.filter(country => countries_req.includes(country.iso3_code));
            let promises = filteredCountries.map(country => getAllBundles(response_2.access_token, country.iso3_code));
            let results = await Promise.allSettled(promises);
            let countries_updated = results.map((result, index) => {
                if (result.status === 'fulfilled') {
                    const { bundles } = JSON.parse(result.value);
                    if (bundles.length > 0) {
                        filteredCountries[index].bundles = bundles;
                        return filteredCountries[index];
                    }
                } else {
                    console.error('Failed to get bundles for country:', filteredCountries[index].iso3_code, 'Error:', result.reason);
                }
            }).filter(country => country !== undefined);

            countries_updated.forEach(country => {
                country.bundles.forEach(bundle => {
                    const country_iso2_code = []
                    bundle.country_code.forEach(country_code => {

                        for (let i = 0; i < countries.length; i++) {
                            if (country_code === countries[i].iso3_code) {
                                country_iso2_code.push({ iso2_code: countries[i].iso2_code.toLowerCase(), country_name: countries[i].country_name });
                            }
                        }
                    });
                    bundle.country_iso2_code = country_iso2_code;
                });
            })
            res.json(countries_updated);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        console.log(Object.keys(req.query).length, countries.length);
        try {

            let promises = countries.map( (country) =>  getAllBundles(response_2.access_token, country.iso3_code));
            let results = await Promise.allSettled(promises);
            let countries_updated = results.map((result, index) => {
                if (result.status === 'fulfilled') {
                    const { bundles } = JSON.parse(result.value);
                    if (bundles.length > 0) {
                        countries[index].bundles = bundles;
                        return countries[index];
                    }
                } else {
                    console.error('Failed to get bundles for country:', countries[index].iso3_code, 'Error:', result.reason);
                }
            }).filter(country => country !== undefined);
            
            countries_updated.forEach(country => {
                country.bundles.forEach(bundle => {
                    const country_iso2_code = []
                    bundle.country_code.forEach(country_code => {

                        for (let i = 0; i < countries.length; i++) {
                            if (country_code === countries[i].iso3_code) {
                                country_iso2_code.push({ iso2_code: countries[i].iso2_code.toLowerCase(), country_name: countries[i].country_name });
                            }
                        }
                    });
                    bundle.country_iso2_code = country_iso2_code;
                });
            })
            
            res.json(countries_updated);
           
        } catch (error) {
            console.error(error);
            
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.get('/api/AllRegions', async (req, res) => {
    try {
        const response_1 = JSON.parse(await loginAgent(username, password));
        const response_2 = JSON.parse(await RefreshToken(response_1.refresh_token));
        const { countries } = JSON.parse(await getAllCountry(response_2.access_token));
        const regions = [
            { region_name: 'Africa', region_code: 'af', image: 'Africa.svg' },
            { region_name: 'Asia', region_code: 'as', image: 'Asia.svg' },
            { region_name: 'Europe', region_code: 'eu', image: 'Europe.svg' },
            { region_name: 'Middle East', region_code: 'me', image: 'Middle-East.svg' },
            { region_name: 'North America', region_code: 'na', image: 'North-America.svg' },
            { region_name: 'South America', region_code: 'sa', image: 'South-America.svg' }
        ];

        const regions_updated = [];

        let promises = regions.map(region => getBundlesOfReg(response_2.access_token, region.region_code, region.region_name));

        let results = await Promise.all(promises);


        for (let i = 0; i < regions.length; i++) {
            const { bundles } = JSON.parse(results[i]);
            if (bundles.length > 0) {
                regions[i].bundles = bundles;
                regions_updated.push(regions[i]);
            }
        }


        regions_updated.forEach(region => {
            region.bundles.forEach(bundle => {
                const country_iso2_code = []
                bundle.country_code.forEach(country_code => {

                    for (let i = 0; i < countries.length; i++) {
                        if (country_code === countries[i].iso3_code) {
                            country_iso2_code.push({ iso2_code: countries[i].iso2_code.toLowerCase(), country_name: countries[i].country_name });
                        }
                    }
                });
                bundle.country_iso2_code = country_iso2_code;
            });
        })
        // console.log(results);
        res.json(regions_updated);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// app.use(express.static("public"));
// app.use(express.json());

const calculateOrderAmount = (item) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return Math.round(item.price * 100);
};

app.post("/api/create-payment-intent", async (req, res) => {

    try {
        const { item } = req.body;
        console.log(item);
        const customer = await stripe.customers.create({
            email: item.email
        });
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(item),
            currency: "usd",
            automatic_payment_methods: {
                enabled: true,
            },
            customer: customer.id,
            metadata: {
                BundleCode: item.code,
                BundleName: item.name,
                BundleMarketingName: item.marketing_name,
                // Add more item data here
            },
            
        });
        
        res.json({
            clientSecret: paymentIntent.client_secret,
            paymentIntentId: paymentIntent.id
        });
    } catch (error) {
        console.error("Error creating payment intent", error);
        res.status(500).json({ error: 'An error occurred while creating the payment intent' });
    }
});

app.post("/api/cancel-payment", async (req, res) => {
    const { paymentIntentId } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.cancel(paymentIntentId);

        res.json({ success: true });
    } catch (error) {
        console.error("Error cancelling payment", error);
        res.json({ success: false, message: error.message });
    }
});

app.post("/api/confirm-payment", async (req, res) => {
    const response_1 = JSON.parse(await loginAgent(username, password));
    const response_2 = JSON.parse(await RefreshToken(response_1.refresh_token));

    const { paymentIntentId, data } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        console.log(paymentIntentId, data, paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            const response = JSON.parse(await assingBundle(response_2.access_token, data));

            
            await stripe.paymentIntents.update(paymentIntentId,
                {
                    metadata: {
                        iccid: response.iccid,
                        message: response.message,
                        order_id: response.order_id,
                        remaining_wallet_balance: response.remaining_wallet_balance,
                        reseller_id: response.reseller_id,
                    }
                });
        }
       
    } catch (error) {
        console.error("Error confirming payment", error);
        res.json({ success: false, message: error.message });
    }

});
// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});