import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AERATOR_WITH_SPARGER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.aerator_with_sparger;',
  },
  _width: 35,
  _height: 100,
}

export function AeratorWithSparger(props: DiagramNodeProps) {
  return (
    <Shape
      {...AERATOR_WITH_SPARGER}
      {...props}
      _style={extendStyle(AERATOR_WITH_SPARGER, props)}
    />
  )
}
