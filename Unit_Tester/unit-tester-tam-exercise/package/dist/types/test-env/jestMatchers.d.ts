/// <reference types="jest" />
import { AnalysisResult } from './TestUtils'
export declare function toHaveResult(
  received: AnalysisResult[],
  expected: Partial<AnalysisResult>
): jest.CustomMatcherResult
export declare function toHaveNoFailures(received: AnalysisResult[]): jest.CustomMatcherResult
export declare function toHaveNoWarnings(received: AnalysisResult[]): jest.CustomMatcherResult
