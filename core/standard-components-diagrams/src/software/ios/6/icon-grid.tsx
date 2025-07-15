import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ICON_GRID = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iIconGrid;gridSize=3,3;',
  _width: 150,
  _height: 150,
}

export function IconGrid(props: DiagramNodeProps) {
  return <Shape {...ICON_GRID} {...props} />
}
