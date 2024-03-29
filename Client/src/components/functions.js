import axios from 'axios';  

export const loginAgent = async (username, password) => {
    const data = JSON.stringify({
        username,
        password
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.REACT_APP_API_URL + '/Agent/login',
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

export const RefreshToken = async (refresh_token) => {
    var data = JSON.stringify({
        "refresh_token": refresh_token
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: process.env.REACT_APP_API_URL + '/Token/Refresh',
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

export const getAllCountry = async (access_token) => {
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.REACT_APP_API_URL + '/AvailableCountries?reseller_admin_view=true',
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
export const getAllBundles = async (access_token, iso3_code, retries = 3) => {
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: process.env.REACT_APP_API_URL + `/Bundles?country_code=${iso3_code}&sort_by=price_asc&reseller_admin_view=true`,
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
