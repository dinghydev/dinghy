import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DROPDOWN_WITH_RIGHT_ALIGNED_MENU = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#6C767D;fontColor=#ffffff;whiteSpace=wrap;align=right;verticalAlign=middle;fontStyle=0;fontSize=14;spacingLeft=10;spacingRight=20;',
  _width: 0,
  _height: 153,
}

export function DropdownWithRightAlignedMenu(props: DiagramNodeProps) {
  return <Shape {...DROPDOWN_WITH_RIGHT_ALIGNED_MENU} {...props} />
}
