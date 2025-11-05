import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_ENGAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Mobile_Engagement.svg;strokeColor=none;',
  },
  _width: 40,
  _height: 67,
}

export function MobileEngagement(props: NodeProps) {
  return (
    <Shape
      {...MOBILE_ENGAGEMENT}
      {...props}
      _style={extendStyle(MOBILE_ENGAGEMENT, props)}
    />
  )
}
