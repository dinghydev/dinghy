import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DIMENSION = {
  _style: {
    entity:
      'verticalLabelPosition=middle;dashed=0;shadow=0;html=1;shape=mxgraph.cabinets.dimension;verticalAlign=top;align=center;',
  },
  _width: 250,
  _height: 40,
}

export function Dimension(props: DiagramNodeProps) {
  return (
    <Shape {...DIMENSION} {...props} _style={extendStyle(DIMENSION, props)} />
  )
}
