import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MILL_PULVERIZER_HAMMER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill,_pulverizer_(hammer);',
  _width: 100,
  _height: 60,
}

export function MillPulverizerHammer(props: DiagramNodeProps) {
  return (
    <Shape
      {...MILL_PULVERIZER_HAMMER}
      {...props}
      _style={extendStyle(MILL_PULVERIZER_HAMMER, props)}
    />
  )
}
