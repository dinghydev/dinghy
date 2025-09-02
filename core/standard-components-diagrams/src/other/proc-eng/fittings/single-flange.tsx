import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_FLANGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.single_flange;',
  },
  _original_width: 5,
  _original_height: 50,
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
