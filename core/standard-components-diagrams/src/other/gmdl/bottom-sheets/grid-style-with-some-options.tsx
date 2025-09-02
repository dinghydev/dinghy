import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRID_STYLE_WITH_SOME_OPTIONS = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _original_width: 358,
  _original_height: 642,
}

export function GridStyleWithSomeOptions(props: DiagramNodeProps) {
  return (
    <Shape
      {...GRID_STYLE_WITH_SOME_OPTIONS}
      {...props}
      _style={extendStyle(GRID_STYLE_WITH_SOME_OPTIONS, props)}
    />
  )
}
