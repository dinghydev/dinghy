import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const READONLY_PLAIN_TEXT_3 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#999999;fillColor=#ffffff;fontColor=#777777;whiteSpace=wrap;align=left;verticalAlign=middle;fontStyle=0;fontSize=14;spacing=15;',
  _width: 3,
  _height: 90,
}

export function ReadonlyPlainText3(props: DiagramNodeProps) {
  return <Shape {...READONLY_PLAIN_TEXT_3} {...props} />
}
