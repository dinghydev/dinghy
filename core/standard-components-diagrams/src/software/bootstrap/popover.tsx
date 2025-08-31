import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POPOVER = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.popover;fillColor=#ffffff;strokeColor=#CCCCCC;dx=35;dy=5;rSize=5;direction=south;whiteSpace=wrap;verticalAlign=bottom;spacing=5;fontSize=10;spacingLeft=5;align=left;',
  _width: 0,
  _height: 60,
}

export function Popover(props: DiagramNodeProps) {
  return <Shape {...POPOVER} {...props} _style={extendStyle(POPOVER, props)} />
}
