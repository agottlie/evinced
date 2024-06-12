import { Config } from './Config'

export interface AnalysisResult {
  component: string
  test: string
  pass: boolean
  message: string
  actions?: string[]
  members?: string[]
  type?: 'WARN' | 'SKIP'
}

/**
 * A DOM element, a selector string or a callback function that returns a DOM element
 */
export type TargetLocator = HTMLElement | SVGElement | string | (() => HTMLElement | SVGElement)

/**
 * An object containing the required inputs for an advanced component test
 * @param containerElement an optional container used as the root of the document instead of the document element
 * @param allowTargetReset if set to `true`, the target element might be reset to a different element if the expected role is identified elsewhere
 * @param ...Config Any of the available configuration options, applied only to this specific analysis
 */
export interface BaseComponentOptions extends Config {
  [x: string]: unknown
  containerElement?: Element
  allowTargetReset?: boolean
}
