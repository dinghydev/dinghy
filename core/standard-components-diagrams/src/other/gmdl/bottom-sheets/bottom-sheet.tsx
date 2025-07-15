import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOTTOM_SHEET = {
  _style:
    'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=none;shadow=0;recursiveResize=0;',
  _width: 358,
  _height: 320,
}

export function BottomSheet(props: DiagramNodeProps) {
  return <Shape {...BOTTOM_SHEET} {...props} />
}
