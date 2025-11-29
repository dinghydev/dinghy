import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANGE_GRAPH_2 = {
  _style: {
    entity: 'fillColor=#F2931E;strokeColor=none;',
  },
  _width: 1,
  _height: 130,
}

export function ChangeGraph2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHANGE_GRAPH_2)} />
}
