import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOTTOM_SHEET = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=none;shadow=0;recursiveResize=0;',
  },
  _width: 358,
  _height: 320,
}

export function BottomSheet(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOTTOM_SHEET}
      {...props}
      _style={extendStyle(BOTTOM_SHEET, props)}
    />
  )
}
