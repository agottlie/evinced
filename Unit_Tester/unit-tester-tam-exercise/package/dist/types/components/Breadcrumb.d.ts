import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes breadcrumb components for accessibility issues.
 */
export default function analyzeBreadcrumb(
  locator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
