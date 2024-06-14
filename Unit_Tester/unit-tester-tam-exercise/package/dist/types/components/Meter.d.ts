import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes meter components for accessibility issues.
 */
export default function analyzeMeter(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
