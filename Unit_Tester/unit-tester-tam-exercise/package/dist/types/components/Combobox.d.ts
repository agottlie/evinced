import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes combobox components for accessibility issues.
 */
export default function analyzeCombobox(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
