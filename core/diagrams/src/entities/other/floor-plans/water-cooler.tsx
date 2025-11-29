import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WATER_COOLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.water_cooler;',
  },
  _original_width: 40,
  _original_height: 40,
}

export function WaterCooler(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WATER_COOLER)} />
}
