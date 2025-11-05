import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRING_RETURN_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.springReturn3;elSwitchState=off;',
  },
  _width: 75,
  _height: 26,
}

export function SpringReturnOff(props: NodeProps) {
  return (
    <Shape
      {...SPRING_RETURN_OFF}
      {...props}
      _style={extendStyle(SPRING_RETURN_OFF, props)}
    />
  )
}
