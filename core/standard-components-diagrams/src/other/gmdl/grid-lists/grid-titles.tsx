import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRID_TITLES = {
  _style: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
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
