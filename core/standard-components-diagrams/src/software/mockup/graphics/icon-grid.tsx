import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ICON_GRID = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.graphics.simpleIcon;strokeColor=#999999;fillColor=#ffffff;',
  },
  _original_width: 200,
  _original_height: 200,
}

export function IconGrid(props: DiagramNodeProps) {
  return (
    <Shape {...ICON_GRID} {...props} _style={extendStyle(ICON_GRID, props)} />
  )
}
