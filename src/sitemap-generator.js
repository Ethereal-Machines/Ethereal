require("babel-register")({
    presets: ["es2015", "react"]
});

const router = require("./sitemap-routes").default;
const SiteMap = require("react-router-sitemap").default;

const generateSiteMap = () => {
    return (
        new SiteMap(router)
            .build("https://etherealmachines.com")
            .save("./public/sitemap.xml")
    );
};

// Function call to generate SiteMap
generateSiteMap();
