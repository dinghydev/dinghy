import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CRUSHING_GRINDING_MACHINE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.crushing,_grinding_machine;',
  _width: 100,
  _height: 60,
}

export function CrushingGrindingMachine(props: DiagramNodeProps) {
  return (
    <Shape
      {...CRUSHING_GRINDING_MACHINE}
      {...props}
      _style={extendStyle(CRUSHING_GRINDING_MACHINE, props)}
    />
  )
}
