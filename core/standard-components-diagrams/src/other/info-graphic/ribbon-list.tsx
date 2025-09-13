import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RIBBON_LIST = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;fillColor=#10739E;strokeColor=none;shadow=1;',
  },
  _width: 0,
  _height: 590,
}

export function RibbonList(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_LIST}
      {...props}
      _style={extendStyle(RIBBON_LIST, props)}
    />
  )
}
