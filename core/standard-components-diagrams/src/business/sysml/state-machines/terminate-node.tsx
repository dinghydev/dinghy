import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TERMINATE_NODE = {
  _style: 'shape=mxgraph.sysml.x;',
  _width: 40,
  _height: 40,
}

export function TerminateNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...TERMINATE_NODE}
      {...props}
      _style={extendStyle(TERMINATE_NODE, props)}
    />
  )
}
