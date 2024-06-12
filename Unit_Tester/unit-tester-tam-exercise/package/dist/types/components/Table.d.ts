import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes Table components for accessibility issues.
 */
export default function analyzeTable(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
