module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '97fde7b9cb8f76ff106ec5a20c2a1e34'),
  },
});
