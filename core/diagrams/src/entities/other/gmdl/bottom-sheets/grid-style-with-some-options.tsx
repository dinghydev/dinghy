import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GRID_STYLE_WITH_SOME_OPTIONS = {
  _style: {
    entity:
      'dashed=0;align=center;fontSize=12;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function GridStyleWithSomeOptions(props: NodeProps) {
  return (
    <Shape
      {...GRID_STYLE_WITH_SOME_OPTIONS}
      {...props}
      _style={extendStyle(GRID_STYLE_WITH_SOME_OPTIONS, props)}
    />
  )
}
