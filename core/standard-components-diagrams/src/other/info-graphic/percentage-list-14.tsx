import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERCENTAGE_LIST_14 = {
  _style:
    'html=1;shape=mxgraph.infographic.ribbonSimple;notch1=0;notch2=20;fillColor=#23445D;strokeColor=none;align=left;verticalAlign=middle;fontColor=#ffffff;fontSize=18;spacingLeft=10;fontStyle=1;shadow=0;',
  _width: 7,
  _height: 250,
}

export function PercentageList14(props: DiagramNodeProps) {
  return <Shape {...PERCENTAGE_LIST_14} {...props} />
}
