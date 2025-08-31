import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANGE_GRAPH_2 = {
  _style: 'fillColor=#F2931E;strokeColor=none;',
  _width: 1,
  _height: 130,
}

export function ChangeGraph2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANGE_GRAPH_2}
      {...props}
      _style={extendStyle(CHANGE_GRAPH_2, props)}
    />
  )
}
