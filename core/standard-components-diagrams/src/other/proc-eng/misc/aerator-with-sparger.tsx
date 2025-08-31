import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AERATOR_WITH_SPARGER = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.aerator_with_sparger;',
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
