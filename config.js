const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "0UpV2NRsRX2BBDlIxHm6NA",
    APISecret: "swfLM6HNiABCeZDmKAU6u37l7JKmROqLwKNS",
  },
  production: {
    APIKey: "0UpV2NRsRX2BBDlIxHm6NA",
    APISecret: "swfLM6HNiABCeZDmKAU6u37l7JKmROqLwKNS",
  },
};

module.exports = config[env];
