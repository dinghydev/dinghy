import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_BOX = {
  _style: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.data_box;html=1;',
  _width: 60,
  _height: 100,
}

export function DataBox(props: DiagramNodeProps) {
  return <Shape {...DATA_BOX} {...props} />
}
