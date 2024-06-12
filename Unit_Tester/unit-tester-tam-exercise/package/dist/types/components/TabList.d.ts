import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes tab list components for accessibility issues.
 */
export default function analyzeTabList(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
