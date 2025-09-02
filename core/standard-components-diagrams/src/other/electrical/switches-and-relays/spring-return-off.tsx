import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRING_RETURN_OFF = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.springReturn3;elSwitchState=off;',
  },
  _original_width: 75,
  _original_height: 26,
}

export function SpringReturnOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPRING_RETURN_OFF}
      {...props}
      _style={extendStyle(SPRING_RETURN_OFF, props)}
    />
  )
}
