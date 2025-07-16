import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HARDWARE_CONTROLLER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.hardware_controller;',
  _width: 38,
  _height: 28.000000000000004,
}

export function HardwareController(props: DiagramNodeProps) {
  return <Shape {...HARDWARE_CONTROLLER} {...props} />
}
