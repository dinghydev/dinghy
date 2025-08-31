import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANGE_GRAPH_3 = {
  _style: 'fillColor=#AE4132;strokeColor=none;',
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
