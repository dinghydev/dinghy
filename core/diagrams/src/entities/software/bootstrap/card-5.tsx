import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD_5 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#000000;verticalAlign=top;align=left;spacing=20;fontSize=14;spacingLeft=170;',
  },
  _width: 0,
  _height: 240,
}

export function Card5(props: NodeProps) {
  return <Shape {...CARD_5} {...props} _style={extendStyle(CARD_5, props)} />
}
