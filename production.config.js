module.exports = {
  apps: [
    {
      name: "library",
      script: "yarn run start",
      env: {
        NODE_ENV: "production",
        // Google oAuth credentials
        GOOGLE_CLIENT_ID: "CHANGE-ME",
        GOOGLE_CLIENT_SECRET: "CHANGE-ME",
        GCP_PROJECT_ID: "CHANGE-ME",
        // comma separated list of approved access domains or email addresses
        // (regex is supported).
        APPROVED_DOMAINS: "CHANGE-ME",
        SESSION_SECRET: "CHANGE-ME",

        // Google drive Configuration
        DRIVE_TYPE: "folder",
        DRIVE_ID: "CHANGE-ME",
      },
    },
  ],
};
