import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BORDER_SPINNER_5 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.basic.arc;startAngle=0.25;endAngle=1;strokeWidth=4;strokeColor=#FFBC26;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function BorderSpinner5(props: DiagramNodeProps) {
  return (
    <Shape
      {...BORDER_SPINNER_5}
      {...props}
      _style={extendStyle(BORDER_SPINNER_5, props)}
    />
  )
}
