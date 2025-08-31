import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANGE_GRAPH_5 = {
  _style: {
    entity: 'fillColor=#23445D;strokeColor=none;',
  },
  _width: 4,
  _height: 130,
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
