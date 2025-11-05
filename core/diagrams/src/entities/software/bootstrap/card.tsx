import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CARD = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#DFDFDF;html=1;whiteSpace=wrap;fillColor=#ffffff;fontColor=#000000;verticalAlign=bottom;align=left;spacing=20;spacingBottom=50;fontSize=14;',
  },
  _width: 0,
  _height: 350,
}

export function Card(props: NodeProps) {
  return <Shape {...CARD} {...props} _style={extendStyle(CARD, props)} />
}
