import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TWO_CARDS = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#FFFFFF;fontColor=#000000;align=left;verticalAlign=top;spacing=20;fontSize=14;',
  _width: 0,
  _height: 190,
}

export function TwoCards(props: DiagramNodeProps) {
  return <Shape {...TWO_CARDS} {...props} />
}
