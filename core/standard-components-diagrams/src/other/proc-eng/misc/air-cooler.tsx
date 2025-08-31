import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIR_COOLER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.air_cooler;',
  _width: 70,
  _height: 20,
}

export function AirCooler(props: DiagramNodeProps) {
  return (
    <Shape {...AIR_COOLER} {...props} _style={extendStyle(AIR_COOLER, props)} />
  )
}
