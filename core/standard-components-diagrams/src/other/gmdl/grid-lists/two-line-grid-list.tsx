import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TWO_LINE_GRID_LIST = {
  _style: 'dashed=0;shape=rect;fillColor=#000000;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function TwoLineGridList(props: DiagramNodeProps) {
  return <Shape {...TWO_LINE_GRID_LIST} {...props} />
}
