import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHANGE_GRAPH = {
  _style: 'fillColor=#10739E;strokeColor=none;',
  _width: 0,
  _height: 130,
}

export function ChangeGraph(props: DiagramNodeProps) {
  return <Shape {...CHANGE_GRAPH} {...props} />
}
