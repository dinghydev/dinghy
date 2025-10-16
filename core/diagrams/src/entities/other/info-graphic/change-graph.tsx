import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHANGE_GRAPH = {
  _style: {
    entity: 'fillColor=#10739E;strokeColor=none;',
  },
  _width: 0,
  _height: 130,
}

export function ChangeGraph(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANGE_GRAPH}
      {...props}
      _style={extendStyle(CHANGE_GRAPH, props)}
    />
  )
}
