import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GRID_STYLE_WITH_SOME_OPTIONS = {
  _style:
    'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=none;',
  _width: 358,
  _height: 642,
}

export function GridStyleWithSomeOptions(props: DiagramNodeProps) {
  return <Shape {...GRID_STYLE_WITH_SOME_OPTIONS} {...props} />
}
