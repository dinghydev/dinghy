import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON_GRID = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iIconGrid;gridSize=3,3;',
  },
  _original_width: 150,
  _original_height: 150,
}

export function IconGrid(props: NodeProps) {
  return (
    <Shape {...ICON_GRID} {...props} _style={extendStyle(ICON_GRID, props)} />
  )
}
