import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WHEEL_THROBBER_1 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.loading_circle_1;pointerEvents=1',
  },
  _original_width: 90,
  _original_height: 90,
}

export function WheelThrobber1(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WHEEL_THROBBER_1)} />
}
