import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_11 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#10739E;strokeColor=none;align=left;verticalAlign=middle;fontColor=#ffffff;fontSize=18;spacingLeft=10;fontStyle=1;shadow=0;',
  },
  _original_width: 1,
  _original_height: 250,
}

export function PercentageList11(props: DiagramNodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_11}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_11, props)}
    />
  )
}
