import { setCredentials } from '@evinced/js-playwright-sdk';
async function globalSetup() {
    await setCredentials({
        serviceId: process.env.AUTH_SERVICE_ID,
        secret: process.env.AUTH_SECRET,
    });
}

export default globalSetup;

// OR

// // Offline credentials
// import { setOfflineCredentials } from '@evinced/js-playwright-sdk';

// async function globalSetup() {
//     setOfflineCredentials({
//         serviceId: process.env.AUTH_SERVICE_ID,
//         token: process.env.AUTH_SECRET,
//     });
// }

// export default globalSetup;