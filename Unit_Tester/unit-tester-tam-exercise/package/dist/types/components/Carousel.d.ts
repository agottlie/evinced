import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * A mandatory object containing additional options for the carousel component scan
 * Extends the BaseComponentOptions interface
 * @param automaticRotation a boolean parameter that determines whether the carousel automatically rotates upon initialization
 * @param nextSlideControl an optional target locator for the next slide control
 * @param prevSlideControl an optional target locator for the previous slide control
 * @param pickerControl an optional target locator for the picker control
 * @param rotationControl an optional target locator for the rotation control
 */
export interface AnalyzeCarouselOptions extends BaseComponentOptions {
  nextSlideControl?: TargetLocator
  prevSlideControl?: TargetLocator
  pickerControl?: TargetLocator
  rotationControl?: TargetLocator
  automaticRotation: boolean
}
/**
 * Analyzes carousel components for accessibility issues.
 */
export default function analyzeCarousel(
  locator: TargetLocator,
  options: AnalyzeCarouselOptions
): Promise<AnalysisResult[]>
