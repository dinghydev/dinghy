import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WATCHER_NODE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.watcher_node;',
  },
  _original_width: 52,
  _original_height: 56,
}

export function WatcherNode(props: DiagramNodeProps) {
  return (
    <Shape
      {...WATCHER_NODE}
      {...props}
      _style={extendStyle(WATCHER_NODE, props)}
    />
  )
}
