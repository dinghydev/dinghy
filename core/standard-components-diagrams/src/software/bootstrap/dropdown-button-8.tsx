import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DROPDOWN_BUTTON_8 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=#FFBC26;fontColor=#000000;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=14;spacingLeft=10;',
  _width: 0,
  _height: 153,
}

export function DropdownButton8(props: DiagramNodeProps) {
  return <Shape {...DROPDOWN_BUTTON_8} {...props} />
}
