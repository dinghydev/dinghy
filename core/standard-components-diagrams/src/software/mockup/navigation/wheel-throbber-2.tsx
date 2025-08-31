import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WHEEL_THROBBER_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.loading_circle_2;pointerEvents=1',
  },
  _width: 60,
  _height: 60,
}

export function WheelThrobber2(props: DiagramNodeProps) {
  return (
    <Shape
      {...WHEEL_THROBBER_2}
      {...props}
      _style={extendStyle(WHEEL_THROBBER_2, props)}
    />
  )
}
