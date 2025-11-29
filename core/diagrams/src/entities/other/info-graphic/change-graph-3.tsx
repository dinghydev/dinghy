import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANGE_GRAPH_3 = {
  _style: {
    entity: 'fillColor=#AE4132;strokeColor=none;',
  },
  _width: 2,
  _height: 130,
}

export function ChangeGraph3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHANGE_GRAPH_3)} />
}
