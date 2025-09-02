import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GRID_TITLES = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _original_width: 358,
  _original_height: 642,
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
