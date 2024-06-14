import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * An object containing the optional inputs for an advanced button component test
 * Extends the BaseComponentOptions interface
 * @param wasActivatedCallback an optional boolean callback to evaluate whether the element was activated
 */
export interface AnalyzeButtonOptions extends BaseComponentOptions {
  wasActivatedCallback?: () => boolean
}
/**
 * Analyzes button components for accessibility issues.
 */
export default function analyzeButton(
  locator: TargetLocator,
  options?: AnalyzeButtonOptions
): Promise<AnalysisResult[]>
