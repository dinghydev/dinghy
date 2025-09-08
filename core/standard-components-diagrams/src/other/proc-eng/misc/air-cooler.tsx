import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AIR_COOLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.air_cooler;',
  },
  _original_width: 70,
  _original_height: 20,
}

export function AirCooler(props: DiagramNodeProps) {
  return (
    <Shape {...AIR_COOLER} {...props} _style={extendStyle(AIR_COOLER, props)} />
  )
}
