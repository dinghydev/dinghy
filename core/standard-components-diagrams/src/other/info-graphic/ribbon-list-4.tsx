import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RIBBON_LIST_4 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;fillColor=#F2931E;strokeColor=none;shadow=1;',
  },
  _width: 3,
  _height: 590,
}

export function RibbonList4(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_LIST_4}
      {...props}
      _style={extendStyle(RIBBON_LIST_4, props)}
    />
  )
}
