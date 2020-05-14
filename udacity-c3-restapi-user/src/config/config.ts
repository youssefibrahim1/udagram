export const config = {
  dev: {
    username: process.env.AWS_USERNAME,
    password: process.env.AWS_PASSWORD,
    database: process.env.AWS_DATABASE,
    host: process.env.AWS_HOST,
    dialect: "postgres",
    aws_region: process.env.AWS_REGION,
    aws_profile: process.env.AWS_PROFILE,
    aws_media_bucket: process.env.AWS_BUCKET,
    url: "http://localhost:8100",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
    url: process.env.AWS_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
