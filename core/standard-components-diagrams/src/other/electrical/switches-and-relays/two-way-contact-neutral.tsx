import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TWO_WAY_CONTACT_NEUTRAL = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.twoWayContact2;elSwitchState=1;',
  },
  _original_width: 75,
  _original_height: 30,
}

export function TwoWayContactNeutral(props: DiagramNodeProps) {
  return (
    <Shape
      {...TWO_WAY_CONTACT_NEUTRAL}
      {...props}
      _style={extendStyle(TWO_WAY_CONTACT_NEUTRAL, props)}
    />
  )
}
