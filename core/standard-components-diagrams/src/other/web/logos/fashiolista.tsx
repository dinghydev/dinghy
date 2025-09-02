import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FASHIOLISTA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.fashiolista',
  },
  _original_width: 77.60000000000001,
  _original_height: 73.2,
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
