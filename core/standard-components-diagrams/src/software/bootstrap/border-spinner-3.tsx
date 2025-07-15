import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BORDER_SPINNER_3 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.basic.arc;startAngle=0.25;endAngle=1;strokeWidth=4;strokeColor=#34A64D;',
  _width: 30,
  _height: 30,
}

export function BorderSpinner3(props: DiagramNodeProps) {
  return <Shape {...BORDER_SPINNER_3} {...props} />
}
