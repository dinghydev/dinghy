import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CDN_PROFILES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/CDN_Profiles.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 40,
}

export function CdnProfiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...CDN_PROFILES}
      {...props}
      _style={extendStyle(CDN_PROFILES, props)}
    />
  )
}
