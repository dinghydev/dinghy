import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOTTOM_SHEET = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=none;shadow=0;recursiveResize=0;',
  },
  _original_width: 358,
  _original_height: 320,
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
