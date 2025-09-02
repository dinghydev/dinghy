import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BENDING_ARCH = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.bendingArch;startAngle=0.75;endAngle=0.25;arcWidth=0.25;fillColor=#10739E;strokeColor=none;fontSize=19;fontColor=#FFFFFF;labelPosition=center;align=center;fontStyle=1;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function BendingArch(props: DiagramNodeProps) {
  return (
    <Shape
      {...BENDING_ARCH}
      {...props}
      _style={extendStyle(BENDING_ARCH, props)}
    />
  )
}
