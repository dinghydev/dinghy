import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FASHIOLISTA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.fashiolista;gradientColor=#DFDEDE',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Fashiolista(props: DiagramNodeProps) {
  return (
    <Shape
      {...FASHIOLISTA}
      {...props}
      _style={extendStyle(FASHIOLISTA, props)}
    />
  )
}
