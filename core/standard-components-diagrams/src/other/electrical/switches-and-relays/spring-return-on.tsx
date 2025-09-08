import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPRING_RETURN_ON = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.springReturn3;elSwitchState=on;',
  },
  _original_width: 75,
  _original_height: 26,
}

export function SpringReturnOn(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPRING_RETURN_ON}
      {...props}
      _style={extendStyle(SPRING_RETURN_ON, props)}
    />
  )
}
