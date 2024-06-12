import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes slider components for accessibility issues.
 */
export default function analyzeSlider(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
