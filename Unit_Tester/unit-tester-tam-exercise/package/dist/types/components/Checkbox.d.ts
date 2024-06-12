import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes checkbox components for accessibility issues.
 */
export default function analyzeCheckbox(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
