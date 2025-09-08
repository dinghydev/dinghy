import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOILER_DOME_HOT_LIQUID = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.boiler_(dome,_hot_liquid);',
  },
  _original_width: 100,
  _original_height: 120,
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
