import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QUEUE_GENERIC = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.queue_generic',
  _width: 50,
  _height: 15,
}

export function QueueGeneric(props: DiagramNodeProps) {
  return <Shape {...QUEUE_GENERIC} {...props} />
}
