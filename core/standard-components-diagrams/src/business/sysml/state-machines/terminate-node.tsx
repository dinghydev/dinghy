import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TERMINATE_NODE = {
  _style: {
    entity: 'shape=mxgraph.sysml.x;',
  },
  _original_width: 40,
  _original_height: 40,
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
