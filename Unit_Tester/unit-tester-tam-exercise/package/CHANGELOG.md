# Change Log

## v1.5.2

- Disable built in axios's proxy when Unit Tester's proxy env vars are set
- Log failed axios requests to local storage

## v1.5.1

- Reduced aria-controls result to a warning if the target is not expanded

## v1.5.0

- Added accessibility analysis of the Data Grid component
- Improvements to disabled components evaluations
- Bugfixes to modal evaluations:
  - Ignored generic, empty elements from inert background evaluation
  - Improvements to focus trap evaluation

## v1.4.0

- Added proxy support for authentication API calls
- Add usage analytics
- Multiple bug fixes and evaluation improvements
  - Support aria-checked=mixed for native checkboxes
  - Improve our accessible name calculation
  - Improve modal escape dismissal test messages
  - Add keyboard events evaluation that prevents side effects
  - Support extended native html semantics use in buttons and links activation test
  - Turn forbidden roles test into a warning

## v1.3.0

- Added accessibility analysis of the Table component
- Throw an error for incompatible node versions (<16)
- Added debug logs, available per configuration
- Added an inline configuration capability allowing configuration to be tailored for individual analyses

## v1.2.0

- Downgraded aria-current test in site navigation component to warning
- Added accessibility analysis of the Spin button component
- Indicate when authentication failed during test due to expired refresh token
- Enable interactive login when refresh token is expired

## v1.1.1

- Updated default configuration options

## v1.1.0

- Added the `reportSkippedTests` global configuration option
- Improved report messages for all components

## v1.0.0

- Released the first official version of the Unit-Tester!!
- Added accessibility analysis of the Meter component
- Refined the documentation and test links

## v0.11.0

- Added user authentication and license authorization
- Added accessibility analysis of the Feed component

## v0.10.0

- Released the first beta version of the Unit-Tester!
- Added accessibility analysis of the following components:
  - Accordion
  - Alert
  - Breadcrumb
  - Button
  - Carousel
  - Checkbox
  - Combobox (Listbox)
  - Disclosure
  - Link
  - Listbox
  - Modal
  - MultiThumbSlider
  - RadioGroup
  - SiteNavigation
  - Slider
  - Switch
  - Tablist
  - Toggle Button
