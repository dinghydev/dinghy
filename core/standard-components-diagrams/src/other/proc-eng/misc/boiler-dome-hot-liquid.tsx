import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOILER_DOME_HOT_LIQUID = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.boiler_(dome,_hot_liquid);',
  },
  _width: 100,
  _height: 120,
}

export function BoilerDomeHotLiquid(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOILER_DOME_HOT_LIQUID}
      {...props}
      _style={extendStyle(BOILER_DOME_HOT_LIQUID, props)}
    />
  )
}
