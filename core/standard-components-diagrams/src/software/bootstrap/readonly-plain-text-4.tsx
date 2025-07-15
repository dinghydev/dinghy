import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const READONLY_PLAIN_TEXT_4 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;fillColor=#0085FC;fontColor=#ffffff;whiteSpace=wrap;align=center;verticalAlign=middle;fontStyle=0;fontSize=14;spacing=14;',
  _width: 2,
  _height: 40,
}

export function ReadonlyPlainText4(props: DiagramNodeProps) {
  return <Shape {...READONLY_PLAIN_TEXT_4} {...props} />
}
