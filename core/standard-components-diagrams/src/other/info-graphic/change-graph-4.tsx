import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHANGE_GRAPH_4 = {
  _style: 'fillColor=#12AAB5;strokeColor=none;',
  _width: 3,
  _height: 130,
}

export function ChangeGraph4(props: DiagramNodeProps) {
  return <Shape {...CHANGE_GRAPH_4} {...props} />
}
