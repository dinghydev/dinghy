import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANGE_GRAPH_4 = {
  _style: 'fillColor=#12AAB5;strokeColor=none;',
  _width: 3,
  _height: 130,
}

export function ChangeGraph4(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHANGE_GRAPH_4}
      {...props}
      _style={extendStyle(CHANGE_GRAPH_4, props)}
    />
  )
}
