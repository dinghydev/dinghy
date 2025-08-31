import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERCENTAGE_LIST_13 = {
  _style:
    'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#AE4132;strokeColor=none;align=left;verticalAlign=middle;fontColor=#ffffff;fontSize=18;spacingLeft=10;fontStyle=1;shadow=0;',
  _width: 5,
  _height: 250,
}

export function PercentageList13(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_13}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_13, props)}
    />
  )
}
