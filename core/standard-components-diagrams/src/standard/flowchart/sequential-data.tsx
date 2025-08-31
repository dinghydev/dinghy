import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEQUENTIAL_DATA = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.sequential_data;whiteSpace=wrap;',
  },
  _width: 60,
  _height: 60,
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
