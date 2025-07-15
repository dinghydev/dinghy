import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARD_GROUP = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;',
  _width: 0,
  _height: 360,
}

export function CardGroup(props: DiagramNodeProps) {
  return <Shape {...CARD_GROUP} {...props} />
}
