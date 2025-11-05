import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TWO_WAY_CONTACT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.twoWayContact2;elSwitchState=neutral;',
  },
  _width: 75,
  _height: 30,
}

export function TwoWayContact(props: NodeProps) {
  return (
    <Shape
      {...TWO_WAY_CONTACT}
      {...props}
      _style={extendStyle(TWO_WAY_CONTACT, props)}
    />
  )
}
