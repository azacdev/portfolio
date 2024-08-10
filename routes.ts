/**
 * Routes that are accessible to the public
 * They dont require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/", "/blog"];

/**
 * Routes used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/signin", "/error"];

/**
 * Prefix for api authentication routes
 * Routes that start with prefix are used for authentication purpose
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Api routes
 * These routes are for api purpose
 * @type {string}
 */
export const apiRoutes = ["/api/post"];

/**
 * The default redirect path after logging in
 * @type {string}
 * **/
export const SIGNIN_REDIRECT = "/blog/post";
