import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes toggle button components for accessibility issues.
 */
export default function analyzeToggleButton(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
