import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes alert components for accessibility issues.
 */
export default function analyzeAlert(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
