import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPRING_RETURN_OFF = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.springReturn3;elSwitchState=off;',
  _width: 75,
  _height: 26,
}

export function SpringReturnOff(props: DiagramNodeProps) {
  return <Shape {...SPRING_RETURN_OFF} {...props} />
}
