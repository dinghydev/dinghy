import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CDN_PROFILES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Content_Delivery_Network.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 23,
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
