import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BORDER_SPINNER = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.basic.arc;startAngle=0.25;endAngle=1;strokeWidth=4;strokeColor=#0085FC;',
  _width: 30,
  _height: 30,
}

export function BorderSpinner(props: DiagramNodeProps) {
  return (
    <Shape
      {...BORDER_SPINNER}
      {...props}
      _style={extendStyle(BORDER_SPINNER, props)}
    />
  )
}
