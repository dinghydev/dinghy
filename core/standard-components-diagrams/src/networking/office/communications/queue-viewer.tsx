import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QUEUE_VIEWER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.queue_viewer;',
  _width: 59,
  _height: 57,
}

export function QueueViewer(props: DiagramNodeProps) {
  return <Shape {...QUEUE_VIEWER} {...props} />
}
