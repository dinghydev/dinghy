import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const JUMBOTRON = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;html=1;whiteSpace=wrap;fillColor=#E9ECEF;fontColor=#474E4F;align=left;spacing=15;fontSize=14;verticalAlign=top;spacingTop=40;',
  _width: 0,
  _height: 300,
}

export function Jumbotron(props: DiagramNodeProps) {
  return <Shape {...JUMBOTRON} {...props} />
}
