import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHANGE_GRAPH_3 = {
  _style: {
    entity: 'fillColor=#AE4132;strokeColor=none;',
  },
  _width: 2,
  _height: 130,
}

export function ChangeGraph3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANGE_GRAPH_3}
      {...props}
      _style={extendStyle(CHANGE_GRAPH_3, props)}
    />
  )
}
