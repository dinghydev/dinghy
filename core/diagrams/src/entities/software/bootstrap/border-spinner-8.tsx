import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BORDER_SPINNER_8 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.basic.arc;startAngle=0.25;endAngle=1;strokeWidth=4;strokeColor=#343A40;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function BorderSpinner8(props: NodeProps) {
  return (
    <Shape
      {...BORDER_SPINNER_8}
      {...props}
      _style={extendStyle(BORDER_SPINNER_8, props)}
    />
  )
}
