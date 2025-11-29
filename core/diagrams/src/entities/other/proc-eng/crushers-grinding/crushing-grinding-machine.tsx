import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CRUSHING_GRINDING_MACHINE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.crushing,_grinding_machine;',
  },
  _width: 100,
  _height: 60,
}

export function CrushingGrindingMachine(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CRUSHING_GRINDING_MACHINE)} />
  )
}
