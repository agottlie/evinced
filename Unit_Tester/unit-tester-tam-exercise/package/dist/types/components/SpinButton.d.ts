import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes Spin button components for accessibility issues.
 */
export default function analyzeSpinButton(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
