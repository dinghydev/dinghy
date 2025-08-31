import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON_GRID = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7ui.iconGrid;fillColor=#c0c0c0;gridSize=3,3;',
  },
  _width: 175,
  _height: 280,
}

export function IconGrid(props: DiagramNodeProps) {
  return (
    <Shape {...ICON_GRID} {...props} _style={extendStyle(ICON_GRID, props)} />
  )
}
