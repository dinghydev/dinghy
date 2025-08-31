import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIR_SEPARATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.air_separator;',
  },
  _width: 65.5,
  _height: 106,
}

export function AirSeparator(props: DiagramNodeProps) {
  return (
    <Shape
      {...AIR_SEPARATOR}
      {...props}
      _style={extendStyle(AIR_SEPARATOR, props)}
    />
  )
}
