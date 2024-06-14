import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * An object containing the optional inputs for an advanced button component test
 * Extends the BaseComponentOptions interface
 * @param isToolbar an optional boolean parameter to specify if the radio group is a toolbar.
 * Toolbars have different navigation functionality than regular radio groups.
 */
export interface AnalyzeRadioGroupOptions extends BaseComponentOptions {
  isToolbar?: boolean
}

/**
 * Analyzes radio group components for accessibility issues.
 */
export default function analyzeRadioGroup(
  locator: TargetLocator,
  options?: AnalyzeRadioGroupOptions
): Promise<AnalysisResult[]>
