import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOBILE_PHONE = {
  _style: {
    entity:
      'shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.mobile_phone;network2IconXOffset=0.0049;network2IconW=0.5297;network2IconH=1.02;',
  },
  _original_width: 26.484999999999996,
  _original_height: 51,
}

export function MobilePhone(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_PHONE}
      {...props}
      _style={extendStyle(MOBILE_PHONE, props)}
    />
  )
}
