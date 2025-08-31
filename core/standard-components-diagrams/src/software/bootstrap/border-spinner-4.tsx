import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BORDER_SPINNER_4 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.basic.arc;startAngle=0.25;endAngle=1;strokeWidth=4;strokeColor=#DB2843;',
  _width: 30,
  _height: 30,
}

export function BorderSpinner4(props: DiagramNodeProps) {
  return (
    <Shape
      {...BORDER_SPINNER_4}
      {...props}
      _style={extendStyle(BORDER_SPINNER_4, props)}
    />
  )
}
