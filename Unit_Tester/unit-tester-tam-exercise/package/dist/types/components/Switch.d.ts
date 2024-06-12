import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes switch components for accessibility issues.
 */
export default function analyzeSwitch(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
