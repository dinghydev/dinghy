import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TWO_LINE_GRID_LIST = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#000000;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function TwoLineGridList(props: DiagramNodeProps) {
  return (
    <Shape
      {...TWO_LINE_GRID_LIST}
      {...props}
      _style={extendStyle(TWO_LINE_GRID_LIST, props)}
    />
  )
}
