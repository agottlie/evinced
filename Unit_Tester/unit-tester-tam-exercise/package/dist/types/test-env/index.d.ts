/// <reference types="jest" />
import { Config, configure } from './Config'
import { AnalysisResult, TargetLocator, BaseComponentOptions } from './TestUtils'
import { authenticate } from './auth'
declare global {
  namespace jest {
    interface Matchers {
      toHaveNoFailures(): jest.CustomMatcherResult
      toHaveNoWarnings(): jest.CustomMatcherResult
      toHaveResult(expected: Partial<AnalysisResult>): jest.CustomMatcherResult
    }
  }
}
export { AnalysisResult, TargetLocator, BaseComponentOptions, Config, configure, authenticate }
