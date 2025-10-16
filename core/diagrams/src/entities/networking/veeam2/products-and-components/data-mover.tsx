import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_MOVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.data_mover;',
  },
  _original_width: 21,
  _original_height: 21,
}

export function DataMover(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_MOVER} {...props} _style={extendStyle(DATA_MOVER, props)} />
  )
}
