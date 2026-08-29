# GrowVest Multi-Page BTC Investment Demo

This version expands the previous prototype into multiple HTML pages and contains 50 investment products.

Pages:
- index.html — landing page
- products.html — 50 investment products with search/filter
- product.html — individual investment detail
- dashboard.html — portfolio dashboard
- wallet.html — BTC-only payment wallet
- transactions.html — transaction ledger
- profile.html — profile/security
- kyc.html — KYC demo
- admin.html — demo admin dashboard

BTC payment:
- The interface accepts BTC only.
- The BTC address in `config.js` is a DEMO address and must be replaced with a real, securely controlled payment/custody integration for production.
- No private keys are stored in this website.
- Deposits are recorded as pending until a real backend verifies the blockchain transaction.

This is an educational/demo implementation, not a live investment service.

## Authentication added
- `login.html`
- `register.html`
- `forgot-password.html`
- `logout.html`
- `auth.js`
- Login-protected dashboard, wallet, transactions, KYC, profile and admin pages
- Investment purchase redirects unauthenticated users to login
- Local demo account/session persistence

Production authentication must move to a server-side implementation with password hashing (Argon2/bcrypt/scrypt), secure HttpOnly/SameSite cookies or secure tokens, CSRF protection, rate limiting, email verification, MFA, password reset tokens and audit logging.

## Updated authentication demo
The browser-only demo now includes:
- Registration with email validation.
- Password strength validation.
- SHA-256 password hashing through Web Crypto before local storage.
- Login with failed-attempt tracking and a temporary lock after repeated failures.
- Session creation and logout.
- Protected dashboard, wallet, transaction, KYC, profile and admin pages.
- Login redirect back to the page the visitor requested.
- Demo password-reset request interface.

This is still not production authentication because all data remains in the browser. A production service needs server-side authentication, Argon2id/bcrypt/scrypt password hashing, secure HttpOnly/SameSite cookies, CSRF protection, email verification, MFA, rate limiting, session revocation, password-reset tokens, audit logs and encrypted data handling.

## Returns
The site must not promise guaranteed investment profits. The product cards therefore use terms such as "indicative", "simulated" and "variable" rather than guaranteed returns. Real investments can lose value.
