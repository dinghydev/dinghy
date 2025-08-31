import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_2_LINE_BUS_ELBOW = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.twoLineBusElbow;notch=25;',
  _width: 120,
  _height: 120,
}

export function Component2LineBusElbow(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_2_LINE_BUS_ELBOW}
      {...props}
      _style={extendStyle(COMPONENT_2_LINE_BUS_ELBOW, props)}
    />
  )
}
