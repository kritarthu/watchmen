module.exports = {

    no_auth : true,
    public_host_name: "http://socialauthenticator.com/auth/google/callback", // required for OAuth dance

    auth: {
        GOOGLE_CLIENT_ID: "396843510878-levpo54pkaeqiohslfrnq6cn8kg5mioi.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "Uzf530LyRcpNk2rbDM0_8kAm"
    },

    port: process.env.WATCHMEN_WEB_PORT, // default port

    admins: process.env.WATCHMEN_ADMINS,

    ga_analytics_ID: process.env.WATCHMEN_GOOGLE_ANALYTICS_ID,

    baseUrl: '/'
};
