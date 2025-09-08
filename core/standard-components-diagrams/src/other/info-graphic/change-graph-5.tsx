import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHANGE_GRAPH_5 = {
  _style: {
    entity: 'fillColor=#23445D;strokeColor=none;',
  },
  _original_width: 4,
  _original_height: 130,
}

export function ChangeGraph5(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANGE_GRAPH_5}
      {...props}
      _style={extendStyle(CHANGE_GRAPH_5, props)}
    />
  )
}
