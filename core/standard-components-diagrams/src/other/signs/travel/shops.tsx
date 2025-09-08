import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHOPS = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.shops;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 95,
}

export function Shops(props: DiagramNodeProps) {
  return <Shape {...SHOPS} {...props} _style={extendStyle(SHOPS, props)} />
}
