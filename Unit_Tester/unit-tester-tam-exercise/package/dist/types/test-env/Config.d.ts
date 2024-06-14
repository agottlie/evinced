import { Options } from '@testing-library/user-event'

/**
 * Configuration of the Evinced UnitTester
 * @reportSkippedTests: If set to `true`, the unit tester will report which tests were skipped, as well as passed INFO level tests.
 * @debugLevel: If set to `dom` or `true`, the unit tester report will include the DOM representation. If set to `roles`, the report will include all elements with roles found in the DOM.
 * @detailedMembersReport: If set to `true`, the unit tester's report will contain detailed information about the members of the tested objects, instead of uniting the results. This is useful for debugging failing tests in complex components.
 * @extendedKeyboardTests: If set to `true`, the analysis will be extended to include all the optional keyboard interactions. This configuration is not fully supported yet.
 * @sendUsageAnalytics: If set to `true`, the unit tester will send usage analytics to Evinced
 * @serviceAccountId: The service account id to use for anonymous authentication
 * @serviceAccountSecret: The service account secret to use for anonymous authentication
 * @suppressAnonymousAuthenticationWarning: If set to `true`, the unit tester will not warn if anonymous authentication is used. This is useful for CI environments where anonymous authentication is the only option.
 * @proxy: Optional proxy configuration to use for the unit tester. May be string, URL or Proxy object
 * @userEventOptions: options to be passed to the user-event library
 */
export interface Config {
  reportSkippedTests?: boolean
  debugLevel?: boolean | 'dom' | 'roles'
  detailedMembersReport?: boolean
  extendedKeyboardTests?: boolean
  sendUsageAnalytics?: boolean
  serviceAccountId?: string
  serviceAccountSecret?: string
  suppressAnonymousAuthenticationWarning?: boolean
  proxy?: string | URL | Proxy
  userEventOptions?: Options
}
/**
 * Proxy configuration for the unit tester
 * @protocol: The protocol of the proxy, either `http` or `https`
 * @host: The host of the proxy
 * @port: The port of the proxy
 * @auth: Optional authentication details for the proxy
 *  @username: The username to use for the proxy
 *  @password: The password to use for the proxy
 */
export interface Proxy {
  protocol: 'http' | 'https'
  host: string
  port: number
  auth?: {
    username: string
    password: string
  }
}

/**
 * Configure global parameters of the Evinced UnitTester
 */
export declare function configure(newConfig: Partial<Config>): void
export declare function getConfig(key: keyof Config): Config[keyof Config]
export declare function getConfig(): Config
