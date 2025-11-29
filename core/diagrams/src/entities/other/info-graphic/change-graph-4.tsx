import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANGE_GRAPH_4 = {
  _style: {
    entity: 'fillColor=#12AAB5;strokeColor=none;',
  },
  _width: 3,
  _height: 130,
}

export function ChangeGraph4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHANGE_GRAPH_4)} />
}
