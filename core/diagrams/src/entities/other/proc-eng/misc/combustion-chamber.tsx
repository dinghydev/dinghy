import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMBUSTION_CHAMBER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.combustion_chamber;',
  },
  _width: 130,
  _height: 100,
}

export function CombustionChamber(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMBUSTION_CHAMBER)} />
}
