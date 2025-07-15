import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QUEUE_GENERIC = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.queue_generic;pointerEvents=1;',
  _width: 50,
  _height: 15,
}

export function QueueGeneric(props: DiagramNodeProps) {
  return <Shape {...QUEUE_GENERIC} {...props} />
}
