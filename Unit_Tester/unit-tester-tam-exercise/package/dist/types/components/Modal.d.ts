import { TargetLocator, AnalysisResult, BaseComponentOptions } from '../test-env'

/**
 * Analyzes modal components with launchers for accessibility issues.
 */
export default function analyzeModal(
  launcherLocator: TargetLocator,
  modalLocator: TargetLocator,
  options?: BaseComponentOptions
): Promise<AnalysisResult[]>
