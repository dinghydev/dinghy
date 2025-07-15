import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LARGE_DROPDOWN_BUTTON = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#505050;strokeWidth=1;fillColor=#ffffff;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=18;spacing=20;',
  _width: 0,
  _height: 50,
}

export function LargeDropdownButton(props: DiagramNodeProps) {
  return <Shape {...LARGE_DROPDOWN_BUTTON} {...props} />
}
