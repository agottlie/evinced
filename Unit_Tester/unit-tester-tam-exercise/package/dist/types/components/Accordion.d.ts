import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes accordion components for accessibility issues.
 */
export default function analyzeAccordion(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
