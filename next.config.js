/** next.config.js */
module.exports = {
  reactStrictMode: true,
  api: {
    bodyParser: false // нужен для Stripe webhook (мы вручную парсим тело)
  }
};
