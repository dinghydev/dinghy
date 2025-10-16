import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_FLANGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.single_flange;',
  },
  _width: 5,
  _height: 50,
}

export function SingleFlange(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_FLANGE}
      {...props}
      _style={extendStyle(SINGLE_FLANGE, props)}
    />
  )
}
