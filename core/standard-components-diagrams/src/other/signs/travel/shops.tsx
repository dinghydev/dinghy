import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHOPS = {
  _style:
    'shape=mxgraph.signs.travel.shops;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 95,
}

export function Shops(props: DiagramNodeProps) {
  return <Shape {...SHOPS} {...props} _style={extendStyle(SHOPS, props)} />
}
