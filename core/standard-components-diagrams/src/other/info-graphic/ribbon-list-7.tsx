import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RIBBON_LIST_7 = {
  _style:
    'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=20;notch2=0;fillColor=#12AAB5;strokeColor=none;shadow=1;',
  _width: 12,
  _height: 590,
}

export function RibbonList7(props: DiagramNodeProps) {
  return (
    <Shape
      {...RIBBON_LIST_7}
      {...props}
      _style={extendStyle(RIBBON_LIST_7, props)}
    />
  )
}
