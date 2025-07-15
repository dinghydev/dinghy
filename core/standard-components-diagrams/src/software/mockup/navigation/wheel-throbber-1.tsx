import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WHEEL_THROBBER_1 = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.misc.loading_circle_1;pointerEvents=1',
  _width: 90,
  _height: 90,
}

export function WheelThrobber1(props: DiagramNodeProps) {
  return <Shape {...WHEEL_THROBBER_1} {...props} />
}
