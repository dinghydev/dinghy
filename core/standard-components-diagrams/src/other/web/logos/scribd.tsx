import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCRIBD = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.scribd;fillColor=#3D3533;strokeColor=none',
  },
  _width: 57.800000000000004,
  _height: 69.2,
}

export function Scribd(props: DiagramNodeProps) {
  return <Shape {...SCRIBD} {...props} _style={extendStyle(SCRIBD, props)} />
}
