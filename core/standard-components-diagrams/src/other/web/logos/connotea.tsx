import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONNOTEA = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.connotea',
  },
  _width: 81,
  _height: 82.60000000000001,
}

export function Connotea(props: DiagramNodeProps) {
  return (
    <Shape {...CONNOTEA} {...props} _style={extendStyle(CONNOTEA, props)} />
  )
}
