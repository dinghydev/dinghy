import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANGE_GRAPH_5 = {
  _style: {
    entity: 'fillColor=#23445D;strokeColor=none;',
  },
  _width: 4,
  _height: 130,
}

export function ChangeGraph5(props: NodeProps) {
  return (
    <Shape
      {...CHANGE_GRAPH_5}
      {...props}
      _style={extendStyle(CHANGE_GRAPH_5, props)}
    />
  )
}
