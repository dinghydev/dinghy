import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORED_DATA = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.stored_data;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
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
