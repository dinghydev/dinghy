import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RIBBON_LIST_7 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;fillColor=#12AAB5;strokeColor=none;shadow=1;',
  },
  _width: 12,
  _height: 590,
}

export function RibbonList7(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RIBBON_LIST_7)} />
}
