import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PERCENTAGE_LIST_12 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#F2931E;strokeColor=none;align=left;verticalAlign=middle;fontColor=#ffffff;fontSize=18;spacingLeft=10;fontStyle=1;shadow=0;',
  },
  _width: 3,
  _height: 250,
}

export function PercentageList12(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_12}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_12, props)}
    />
  )
}
