import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDUSTRIAL_TRUCK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.industrial_truck;pointerEvents=1;',
  },
  _width: 120,
  _height: 20,
}

export function IndustrialTruck(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INDUSTRIAL_TRUCK)} />
}
