import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RIBBON_LIST_5 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;fillColor=#AE4132;strokeColor=none;shadow=1;',
  },
  _width: 6,
  _height: 590,
}

export function RibbonList5(props: NodeProps) {
  return (
    <Shape
      {...RIBBON_LIST_5}
      {...props}
      _style={extendStyle(RIBBON_LIST_5, props)}
    />
  )
}
