import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GRID_TITLES = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _width: 358,
  _height: 642,
}

export function GridTitles(props: DiagramNodeProps) {
  return (
    <Shape
      {...GRID_TITLES}
      {...props}
      _style={extendStyle(GRID_TITLES, props)}
    />
  )
}
