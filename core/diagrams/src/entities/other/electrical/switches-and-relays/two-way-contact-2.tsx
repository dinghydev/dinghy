import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TWO_WAY_CONTACT_2 = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.twoWayContact2;elSwitchState=2;',
  },
  _width: 75,
  _height: 30,
}

export function TwoWayContact2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TWO_WAY_CONTACT_2)} />
}
