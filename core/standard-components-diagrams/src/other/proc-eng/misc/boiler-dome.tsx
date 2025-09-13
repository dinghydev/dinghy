import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOILER_DOME = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.boiler_(dome);',
  },
  _width: 100,
  _height: 120,
}

export function BoilerDome(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOILER_DOME}
      {...props}
      _style={extendStyle(BOILER_DOME, props)}
    />
  )
}
