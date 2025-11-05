import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNET_ANALYZER_PROFILES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Internet_Analyzer_Profiles.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64,
}

export function InternetAnalyzerProfiles(props: NodeProps) {
  return (
    <Shape
      {...INTERNET_ANALYZER_PROFILES}
      {...props}
      _style={extendStyle(INTERNET_ANALYZER_PROFILES, props)}
    />
  )
}
