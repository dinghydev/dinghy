import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRING_RETURN_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.springReturn3;elSwitchState=on;',
  },
  _width: 75,
  _height: 26,
}

export function SpringReturnOn(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPRING_RETURN_ON)} />
}
