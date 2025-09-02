import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const QUEUE_GENERIC = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.azure.queue_generic',
  },
  _original_width: 50,
  _original_height: 15,
}

export function QueueGeneric(props: DiagramNodeProps) {
  return (
    <Shape
      {...QUEUE_GENERIC}
      {...props}
      _style={extendStyle(QUEUE_GENERIC, props)}
    />
  )
}
