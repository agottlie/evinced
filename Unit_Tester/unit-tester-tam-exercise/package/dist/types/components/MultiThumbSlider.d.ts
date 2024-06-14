import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes Multi-thumb slider components for accessibility issues.
 */
export default function analyzeMultiThumbSlider(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
