import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WASHING_MACHINE = {
  _style:
    'shape=mxgraph.signs.tech.washing_machine;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 75,
  _height: 98,
}

export function WashingMachine(props: DiagramNodeProps) {
  return (
    <Shape
      {...WASHING_MACHINE}
      {...props}
      _style={extendStyle(WASHING_MACHINE, props)}
    />
  )
}
