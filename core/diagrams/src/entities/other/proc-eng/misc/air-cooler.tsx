import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AIR_COOLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.air_cooler;',
  },
  _width: 70,
  _height: 20,
}

export function AirCooler(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AIR_COOLER)} />
}
