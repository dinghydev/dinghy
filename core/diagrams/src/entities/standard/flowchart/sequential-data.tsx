import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEQUENTIAL_DATA = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.sequential_data;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function SequentialData(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEQUENTIAL_DATA}
      {...props}
      _style={extendStyle(SEQUENTIAL_DATA, props)}
    />
  )
}
