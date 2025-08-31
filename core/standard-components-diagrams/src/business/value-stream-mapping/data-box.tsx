import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_BOX = {
  _style: {
    entity: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.data_box;html=1;',
  },
  _width: 60,
  _height: 100,
}

export function DataBox(props: DiagramNodeProps) {
  return (
    <Shape {...DATA_BOX} {...props} _style={extendStyle(DATA_BOX, props)} />
  )
}
