import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERNET_ANALYZER_PROFILES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Internet_Analyzer_Profiles.svg;',
  _width: 68,
  _height: 64,
}

export function InternetAnalyzerProfiles(props: DiagramNodeProps) {
  return <Shape {...INTERNET_ANALYZER_PROFILES} {...props} />
}
