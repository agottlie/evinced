# Unit Tester

The Evinced Unit Tester integrates with new or existing Jest environments to automatically detect accessibility issues. By adding just one unit test to your component library project, you can check that your component has the required accessibility semantics and that you have implemented the correct keyboard interactions. This will ensure that each tested component is fully compatible with assistive technologies (e.g. screen readers) and operable by keyboard. Since the JSDOM environment does not visually render the code, we recommend using downstream tools and/or manual review to evaluate visual requirements such as focus indication and color contrast. At the conclusion of each test, a rich and comprehensive report is generated to easily track issues to resolution.

Interested in seeing this in action? [Contact us] to get started!

## Prerequisites

- Node version 14.15 or higher
- A testing framework like [Jest](https://jestjs.io/docs/getting-started) or [Vitest](https://vitest.dev/guide/) is installed and configured in your project. For running tests with other testing frameworks, please [contact us].
  - [Jest](https://jestjs.io/docs/getting-started) version >= 25 is required for Jest users.
- [Testing Library](https://testing-library.com/docs/) for your relevant framework is installed in your project. This is required to simulate user interactions in your tests.
- JSDOM version >= 15.2.1 is supported. If you encounter issues with JSDOM, please [contact us].

## Get Started

### Add EvincedUT as a dependency

In your project directory install Unit Tester using npm or yarn. The Unit Tester package is not publicly available, and requires a token. [Contact us] to get started!

```javascript
npm install "@evinced/unit-tester"
```

### Import Unit Tester into your test files

In your test file, import Unit Tester and initialize the EvincedUT object.

```javascript
import EvincedUT from '@evinced/unit-tester'
```

### Import EvincedUT into your test environment

Instead of importing EvincedUT into each test file, you can make the EvincedUT object available globally in your test environment. Simply add the following lines to your Jest setup file.

```javascript
import EvincedUT from '@evinced/unit-tester'

Object.defineProperty(global, 'EvincedUT', {
  value: EvincedUT
})
```

If your Jest configuration does not include a setup file, you can create one by adding the following line to your Jest configuration file. Make sure to use the `setupFilesAfterEnv` configuration option as the Evinced library must be initialized after Jest is loaded.

```javascript
setupFilesAfterEnv: ["<rootDir>/setup-jest.js"],
```

**NOTE:** If your eslint rules raise a `no-undef` error on the EvincedUT global object, you can add the following lines to your `eslint.rc`:

```javascript
globals: {
  EvincedUT: 'readonly'
}
```

### Authentication

In order to write and run tests with the Evinced Unit Tester, you must set up authentication. The unit tester supports two modes of authentication. [User authentication] is intended for test authors, it enables the user to write and run tests. [Anonymous authentication] is intended for test runners and CI environments, it enables the user to run tests.

#### User authentication

To set up user authentication, you must run the login command from your project root. After installing the Evinced Unit Tester, run the following command in your project directory:

```shell
$ npx --package=@evinced/unit-tester login
```

This will open a browser window where you will be asked to confirm the login code which will be printed to the terminal.

```shell
Opening the browser to continue the login process, your user code is ABCD-EFGH.
If the browser does not open automatically, please open it manually and navigate
to https://auth.evinced.com/activate?user_code=ABCD-EFGH
```

After confirming the login code, you will be asked to log in to your Evinced account. If you do not have an Evinced account, contact the administrator of your Evinced organization or [contact us] to get started.

Once you have logged in, the login command will print a success message to the terminal.

```shell
Login successful
```

You can now write and run tests with the Evinced Unit Tester. Each time your authentication token expires, the unit tester will automatically refresh it, you should not need to run the login command again. If you want to change the user that is logged in, you must delete the saved user token. To do this, run the following command from your project root:

```shell
rm .cache/userToken
```

To ensure that your authentication token is not accidentally committed to your source control, you should add the `.cache` directory to your `.gitignore` file.

#### Anonymous authentication

Anonymous authentication is intended for test runners and CI environments. It enables the user to run tests without having to log in to an Evinced account. In order to user anonymous authentication, you must find your evinced service account id and secret. Contact the administrator of your Evinced organization or [contact us] if you do not have these. There are two ways to set up anonymous authentication:

1. You can set the `EVINCED_SERVICE_ACCOUNT_ID` and `EVINCED_SERVICE_ACCOUNT_SECRET` environment variables.
2. You can call the `configure` method exposed by the unit tester package before running your tests, for instance in your Jest setup file.

```javascript
import EvincedUT, { configure } from '@evinced/unit-tester'

configure({
  serviceAccountId: 'your-service-account-id',
  serviceAccountSecret: 'your-service-account-secret'
})
```

Once you have set up anonymous authentication, you can run tests with the Evinced Unit Tester without having to log in to an Evinced account. An authentication token will be saved to your `.cache` directory, you should not commit this to your source control.

### Your first test

Here are simple examples of how to add an Evinced accessibility scan to a test. Please note the inline comments that give detail on each test step.

#### Vanilla JS

```javascript
it('Evinced unit tester basic example', async () => {
  // Create your component
  const myComponent = document.createElement('div')
  myComponent.setAttribute('role', 'button')
  myComponent.setAttribute('class', 'custom-button')
  document.body.appendChild(myComponent)

  // Scan for a11y issues and assert on the results
  const results = await EvincedUT.analyzeButton(myComponent)
  expect(results).toHaveNoFailures()
})
```

#### React

```javascript
import { screen, render } from '@testing-library/react'

it('Evinced unit tester basic example', async () => {
  // Render your component
  render(<MyButton>Click Me!</MyButton>)
  const myComponent = screen.getByRole('button')

  // Scan for a11y issues and assert on the results
  const results = await EvincedUT.analyzeButton(myComponent)
  expect(results).toHaveNoFailures()
})
```

## Components summary

| Component          | API Method                                            | Knowledge Base                                                                          |
| ------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Accordion          | [`analyzeAccordion`](#analyzeaccordion)               | [Accordion entry](https://knowledge.evinced.com/components/Accordion)                   |
| Alert              | [`analyzeAlert`](#analyzealert)                       | [Alert entry](https://knowledge.evinced.com/components/Alert)                           |
| Breadcrumbs        | [`analyzeBreadcrumbs`](#analyzebreadcrumbs)           | [Breadcrumbs entry](https://knowledge.evinced.com/components/Breadcrumbs)               |
| Button             | [`analyzeButton`](#analyzebutton)                     | [Button entry](https://knowledge.evinced.com/components/Button)                         |
| Carousel           | [`analyzeCarousel`](#analyzecarousel)                 | [Carousel entry](https://knowledge.evinced.com/components/Carousel)                     |
| Checkbox           | [`analyzeCheckbox`](#analyzecheckbox)                 | [Checkbox entry](https://knowledge.evinced.com/components/Checkbox)                     |
| Combobox           | [`analyzeCombobox`](#analyzecombobox)                 | [Combobox entry](https://knowledge.evinced.com/components/Combobox)                     |
| Disclosure         | [`analyzeDisclosure`](#analyzedisclosure)             | [Disclosure entry](https://knowledge.evinced.com/components/Disclosure)                 |
| Feed               | [`analyzeFeed`](#analyzefeed)                         | [Feed entry](https://knowledge.evinced.com/components/Feed)                             |
| Link               | [`analyzeLink`](#analyzelink)                         | [Link entry](https://knowledge.evinced.com/components/Link)                             |
| Listbox            | [`analyzeListbox`](#analyzelistbox)                   | [Listbox entry](https://knowledge.evinced.com/components/Listbox)                       |
| Meter              | [`analyzeMeter`](#analyzemeter)                       | [Meter entry](https://knowledge.evinced.com/components/Meter)                           |
| Modal              | [`analyzeModal`](#analyzemodal)                       | [Modal entry](https://knowledge.evinced.com/components/Modal)                           |
| Site Navigation    | [`analyzeSiteNavigation`](#analyzesitenavigation)     | [Site Navigation entry](https://knowledge.evinced.com/components/Site-navigation)       |
| Radio Group        | [`analyzeRadioGroup`](#analyzeradiogroup)             | [Radio Group entry](https://knowledge.evinced.com/components/Radio-Group)               |
| Slider             | [`analyzeSlider`](#analyzeslider)                     | [Slider entry](https://knowledge.evinced.com/components/Slider)                         |
| Multi Thumb Slider | [`analyzeSliderMultiThumb`](#analyzeslidermultithumb) | [Multi Thumb Slider entry](https://knowledge.evinced.com/components/Multi-thumb-slider) |
| Switch             | [`analyzeSwitch`](#analyzeswitch)                     | [Switch entry](https://knowledge.evinced.com/components/Switch)                         |
| Tab List           | [`analyzeTabList`](#analyzetablist)                   | [Tab List entry](https://knowledge.evinced.com/components/Tablist)                      |
| Toggle Button      | [`analyzeToggleButton`](#analyzetogglebutton)         | [Toggle Button entry](https://knowledge.evinced.com/components/Toggle-Button)           |

## API

### about EvincedUT.analyzeComponent

<h4>Overview</h4>

Scans the specified component. An array is returned containing the results of each accessibility check that was performed. This is the generic API signature for most components. For more specific component types, see the following methods.

<h4>Parameters</h4>

- `locator: TargetLocator` - The locator for the component to be scanned. This can be a CSS selector string, an element, or a function that returns an element.
- `options?: BaseComponentOptions` - An optional [object](#basecomponentoptions) containing additional options for the scan.
  - `containerElement?: Element` - An optional container used as the root of the document instead of the document element
  - `allowTargetReset?: boolean` - An optional parameter that allows Unit Tester to pick the target element. Useful when the component is wrapped inside several containers.
  - `userEventOptions?: @testing-library/user-event Options` - An optional object containing options to be passed to the [user-event library](https://testing-library.com/docs/user-event/options/)

<h4>Example</h4>

In the following example, a selector is passed to locate the switch component. The `containerElement` option is used to specify the root container for the scan. The `userEventOptions` option is used to specify the delay between user interactions in the test.

```javascript
const results = await EvincedUT.analyzeSwitch('#my-switch', {
  containerElement: '#my-container',
  userEventOptions: { delay: 10 }
})
expect(results).toHaveNoFailures()
```

<h4>Default options</h4>

```javascript
{
  containerElement: document.documentElement
  allowTargetReset: false
  userEventOptions: undefined
}
```

<h4>Return value</h4>

```javascript
Promise<AnalysisResult[]>;
```

[See AnalysisResult](#analysisresult)

### analyzeAccordion

<h4>Overview</h4>

Scans the specified accordion container. An array is returned containing the results of each accessibility check that was performed.

This test uses the signature specified in the [analyzeDisclosure](#analyzedisclosure) section.

### analyzeAlert

<h4>Overview</h4>

Scans the specified alert element. Make sure the element is visible before scanning.

An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeBreadcrumbs

<h4>Overview</h4>

Scans the specified breadcrumbs container. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeButton

<h4>Overview</h4>

Scans the specified button. An array is returned containing the results of each accessibility check that was performed.

<h4>Parameters</h4>

- `locator: TargetLocator` - The locator for the component to be scanned. This can be a CSS selector string, an element, or a function that returns an element.
- `options?: AnalyzeButtonOptions` - An optional object containing additional options for the scan.
  - `wasActivatedCallback?: () => boolean` - an optional boolean callback to evaluate whether the element was activated after interactions
  - The other parameters of the [BaseComponentOptions](#basecomponentoptions) type.

<h4>Example</h4>

```javascript
const checkActivation = () => {
  return window.wasButtonActivated === true
}

const results = await EvincedUT.analyzeButton('div[role="button"]', {
  wasActivatedCallback: checkActivation
})
expect(results).toHaveNoFailures()
```

### analyzeCheckbox

<h4>Overview</h4>

Scans the specified checkbox. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeCarousel

<h4>Overview</h4>

Scans the specified carousel. An array is returned containing the results of each accessibility check that was performed.

<h4>Parameters</h4>

The carousel scan requires additional options. It is mandatory to specify the automatic rotation option, and either the next/previous slide controls or the slider picker control.

If your implementation of carousel does not include any controls, it is considered as an accessibility violation.

- `locator: TargetLocator` - The locator for the component to be scanned. This can be a CSS selector string, an element, or a function that returns an element.
- `options: AnalyzeCarouselOptions` - A mandatory object containing additional options for the scan.
  - `automaticRotation: boolean` - a boolean parameter that determines whether the carousel automatically rotates upon initialization
  - `nextSlideControl?: TargetLocator` an optional target locator for the next slide control
  - `prevSlideControl?: TargetLocator` an optional target locator for the previous slide control
  - `pickerControl?: TargetLocator` an optional target locator for the slider picker control
  - `rotationControl?: TargetLocator` an optional target locator for the rotation control
  - The other parameters of the [BaseComponentOptions](#basecomponentoptions) type.

<h4>Example</h4>

```javascript
const checkActivation = () => {
  return window.wasButtonActivated === true
}

const results = await EvincedUT.analyzeCarousel('div.carousel', {
  automaticRotation: false,
  nextSlideControl: 'div.next-slide',
  prevSlideControl: 'div.prev-slide',
  rotationControl: 'div.rotation-control'
})
expect(results).toHaveNoFailures()
```

### analyzeCombobox

<h4>Overview</h4>

Scans the specified combobox element. Currently only supports the listbox combobox pattern.

An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeDisclosure

<h4>Overview</h4>

Scans the specified disclosure button. An array is returned containing the results of each accessibility check that was performed.

<h4>Parameters</h4>

- `locator: TargetLocator` - The locator for the disclosure button to be scanned. This can be a CSS selector string, an element, or a function that returns an element.
- `options?: AnalyzeDisclosureOptions` - An optional object containing additional options for the scan.
  - `evalEscape?: boolean` - An optional boolean parameter that determines whether to evaluate the escape key accessibility. Default is false.
  - The other parameters of the [BaseComponentOptions](#basecomponentoptions) type.

<h4>Example</h4>

```javascript
const results = await EvincedUT.analyzeDisclosure('div[role="button"]', {
  evalEscape: true
})
expect(results).toHaveNoFailures()
```

### analyzeFeed

<h4>Overview</h4>

Scans the specified feed element. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeLink

<h4>Overview</h4>

Scans the specified link. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeListbox

<h4>Overview</h4>

Scans the specified listbox element. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeMeter

<h4>Overview</h4>

Scans the specified meter element. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeModal

<h4>Overview</h4>

Scans the specified modal dialog and launcher element. An array is returned containing the results of each accessibility check that was performed.

<h4>Parameters</h4>

- `launcherLocator: TargetLocator` - The locator for the modal launcher. This can be a CSS selector string, an element, or a function that returns an element.
- `modalLocator: TargetLocator` - The locator for the modal container. This can be a CSS selector string, an element, or a function that returns an element.
- `options?: BaseComponentOptions` - An optional [object](#basecomponentoptions) containing additional options for the scan.

<h4>Example</h4>

```javascript
const results = await EvincedUT.analyzeModal(buttonElement, 'div[role="dialog"]')
expect(results).toHaveNoFailures()
```

### analyzeRadioGroup

<h4>Overview</h4>

Scans the specified radio group. An array is returned containing the results of each accessibility check that was performed.

<h4>Parameters</h4>

- `locator: TargetLocator` - The locator for the component to be scanned. This can be a CSS selector string, an element, or a function that returns an element.
- `options?: AnalyzeRadioGroupOptions` - An optional object containing additional options for the scan.
  - `isToolbar?: boolean` - an optional boolean parameter to specify if the radio group is part of a toolbar.
  - The other parameters of the [BaseComponentOptions](#basecomponentoptions) type.

<h4>Example</h4>

```javascript
const results = await EvincedUT.analyzeRadioGroup('div[role="radiogroup"]', {
  isToolbar: true
})
expect(results).toHaveNoFailures()
```

<h4>Default options</h4>

```javascript
{
  containerElement: document.documentElement
  isToolbar: false
}
```

### analyzeSiteNavigation

<h4>Overview</h4>

Scans the specified site navigation container. Supports all kinds of site navigation components.

An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeSlider

<h4>Overview</h4>

Scans the specified slider. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeSliderMultiThumb

<h4>Overview</h4>

Scans the specified multi thumb slider container. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeSwitch

<h4>Overview</h4>

Scans the specified switch. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeTabList

<h4>Overview</h4>

Scans the specified tablist container. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

### analyzeToggleButton

<h4>Overview</h4>

Scans the specified toggle button, which is a subcategory of the button pattern. An array is returned containing the results of each accessibility check that was performed.

This test uses the generic signature specified in the [About analyzeComponent] section.

## Assertions

### toHaveNoFailures

Asserts that the scan results contain no failures. If the scan results contain failures, the test will fail and the results will be printed to the console. This assertion is useful when you want to ensure that your component has the required accessibility semantics and that you have implemented the correct keyboard interactions.

<h4>Example</h4>

```javascript
const results = await EvincedUT.analyzeButton('div[role="button"]')
expect(results).toHaveNoFailures()
```

### toHaveNoWarnings

Asserts that the scan results contain no warnings. If the scan results contain warnings, the test will fail and the results will be printed to the console. This assertion is a strict version of the `toHaveNoFailures` assertion. It is useful when you want to ensure that your component have implemented recommended accessibility semantics and keyboard interactions.

<h4>Example</h4>

```javascript
const results = await EvincedUT.analyzeButton('div[role="button"]')
expect(results).toHaveNoWarnings()
```

### toHaveResult

Asserts that the scan results contain a specific result. If the scan results do not contain the specified result, the test will fail and the results will be printed to the console. This assertion is useful when you want to ensure that your component complies with specific tests.

<h4>Parameters</h4>

- `expected: Partial<AnalysisResult>` - The expected result. The assertion will pass if the scan results contain a result that matches the expected result.

<h4>Example</h4>

```javascript
const results = await EvincedUT.analyzeButton('div[role="button"]')
expect(results).toHaveResult({
  component: 'Button',
  test: 'button name',
  pass: true
})
```

## Typings

### TargetLocator

```javascript
;string | HTMLElement | SVGElement | (() => HTMLElement | SVGElement)
```

### AnalysisResult

```javascript
{
    // The type of component that was scanned
    component: string;

    // The test that was run
    test: string;

    // The result of the test
    pass: boolean;

    // The message associated with the test
    message: string;

    // The element that were related to the test message
    members?: string[];

    // The actions that were related to the test message
    actions?: string[];

    // The type of the result (PASS, FAIL, WARN or SKIP)
    type?: string;
}
```

### BaseComponentOptions

```javascript
{
    // The container element to use as the root of the document
    containerElement?: Element;
    // An optional parameter that allows Unit Tester to pick the target element.
    // Useful when the component is wrapped inside several containers.
    allowTargetReset?: boolean;
    // An optional object containing options to be passed to the user-event library
    // https://testing-library.com/docs/user-event/options/
    userEventOptions?: @testing-library/user-event Options;
}
```

## Support

Please feel free to reach out to [support@evinced.com] with any questions.

[contact us]: mailto:support@evinced.com
[support@evinced.com]: mailto:support@evinced.com
[about analyzecomponent]: #aboutevincedut.analyzecomponent
