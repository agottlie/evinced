import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes feed components for accessibility issues.
 */
export default function analyzeFeed(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
