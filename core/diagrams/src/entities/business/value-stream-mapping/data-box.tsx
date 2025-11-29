import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_BOX = {
  _style: {
    entity: 'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.data_box;html=1;',
  },
  _width: 60,
  _height: 100,
}

export function DataBox(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_BOX)} />
}
