import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const QUEUE_VIEWER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.queue_viewer;',
  },
  _original_width: 59,
  _original_height: 57,
}

export function QueueViewer(props: NodeProps) {
  return (
    <Shape
      {...QUEUE_VIEWER}
      {...props}
      _style={extendStyle(QUEUE_VIEWER, props)}
    />
  )
}
