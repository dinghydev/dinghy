import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIRECT_DATA = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.direct_data;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function DirectData(props: DiagramNodeProps) {
  return (
    <Shape
      {...DIRECT_DATA}
      {...props}
      _style={extendStyle(DIRECT_DATA, props)}
    />
  )
}
