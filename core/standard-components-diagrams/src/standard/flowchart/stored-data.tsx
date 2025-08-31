import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORED_DATA = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.stored_data;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function StoredData(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORED_DATA}
      {...props}
      _style={extendStyle(STORED_DATA, props)}
    />
  )
}
