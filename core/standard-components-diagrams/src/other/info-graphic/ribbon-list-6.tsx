import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RIBBON_LIST_6 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;fillColor=#23445D;strokeColor=none;shadow=1;',
  },
  _original_width: 9,
  _original_height: 590,
}

export function RibbonList6(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_LIST_6}
      {...props}
      _style={extendStyle(RIBBON_LIST_6, props)}
    />
  )
}
