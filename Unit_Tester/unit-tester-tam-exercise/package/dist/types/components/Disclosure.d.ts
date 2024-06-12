import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * An object containing the optional inputs for an advanced disclosure component test
 * Extends the BaseComponentOptions interface
 * @param evalEscape an optional boolean to enable evaluation of the escape key functionality
 */
export interface AnalyzeDisclosureOptions extends BaseComponentOptions {
  evalEscape?: boolean
}
/**
 * Analyzes disclosure components for accessibility issues.
 */
export default function analyzeDisclosure(
  locator: TargetLocator,
  options?: BaseComponentOptions & {
    evalEscape?: boolean
  }
): Promise<AnalysisResult[]>
