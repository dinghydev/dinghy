import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BORDER_SPINNER_6 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.basic.arc;startAngle=0.25;endAngle=1;strokeWidth=4;strokeColor=#1CA5B8;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function BorderSpinner6(props: DiagramNodeProps) {
  return (
    <Shape
      {...BORDER_SPINNER_6}
      {...props}
      _style={extendStyle(BORDER_SPINNER_6, props)}
    />
  )
}
