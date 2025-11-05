import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERCENTAGE_LIST_14 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#23445D;strokeColor=none;align=left;verticalAlign=middle;fontColor=#ffffff;fontSize=18;spacingLeft=10;fontStyle=1;shadow=0;',
  },
  _width: 7,
  _height: 250,
}

export function PercentageList14(props: NodeProps) {
  return (
    <Shape
      {...PERCENTAGE_LIST_14}
      {...props}
      _style={extendStyle(PERCENTAGE_LIST_14, props)}
    />
  )
}
