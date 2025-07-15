import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BORDER_SPINNER_7 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.basic.arc;startAngle=0.25;endAngle=1;strokeWidth=4;strokeColor=#F8F9FA;',
  _width: 30,
  _height: 30,
}

export function BorderSpinner7(props: DiagramNodeProps) {
  return <Shape {...BORDER_SPINNER_7} {...props} />
}
