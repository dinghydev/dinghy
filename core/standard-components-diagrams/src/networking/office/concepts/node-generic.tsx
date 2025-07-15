import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NODE_GENERIC = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.node_generic;',
  _width: 46,
  _height: 52,
}

export function NodeGeneric(props: DiagramNodeProps) {
  return <Shape {...NODE_GENERIC} {...props} />
}
