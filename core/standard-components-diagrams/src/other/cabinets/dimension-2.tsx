import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIMENSION_2 = {
  _style: {
    entity:
      'verticalLabelPosition=middle;dashed=0;shadow=0;html=1;shape=mxgraph.cabinets.dimensionBottom;verticalAlign=bottom;align=center;',
  },
  _width: 250,
  _height: 40,
}

export function Dimension2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIMENSION_2}
      {...props}
      _style={extendStyle(DIMENSION_2, props)}
    />
  )
}
