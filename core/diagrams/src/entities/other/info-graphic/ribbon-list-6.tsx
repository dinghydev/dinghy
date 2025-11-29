import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RIBBON_LIST_6 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;fillColor=#23445D;strokeColor=none;shadow=1;',
  },
  _width: 9,
  _height: 590,
}

export function RibbonList6(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RIBBON_LIST_6)} />
}
