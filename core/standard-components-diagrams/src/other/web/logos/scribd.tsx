import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SCRIBD = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.scribd;fillColor=#3D3533;strokeColor=none',
  },
  _original_width: 57.800000000000004,
  _original_height: 69.2,
}

export function Scribd(props: DiagramNodeProps) {
  return <Shape {...SCRIBD} {...props} _style={extendStyle(SCRIBD, props)} />
}
