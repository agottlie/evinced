import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes listbox components for accessibility issues.
 */
export default function analyzeListBox(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
