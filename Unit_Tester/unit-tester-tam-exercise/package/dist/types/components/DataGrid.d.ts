import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes data grid components for accessibility issues.
 */
export default function analyzeDataGrid(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
