import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes link components for accessibility issues.
 */
export default function analyzeLink(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
