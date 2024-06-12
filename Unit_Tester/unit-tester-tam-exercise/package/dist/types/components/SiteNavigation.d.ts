import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes navigation components for accessibility issues.
 */
export default function analyzeSiteNavigation(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
