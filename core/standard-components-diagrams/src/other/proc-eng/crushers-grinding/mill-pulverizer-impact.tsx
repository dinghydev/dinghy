import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MILL_PULVERIZER_IMPACT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill,_pulverizer_(impact);',
  },
  _original_width: 100,
  _original_height: 60,
}

export function MillPulverizerImpact(props: DiagramNodeProps) {
  return (
    <Shape
      {...MILL_PULVERIZER_IMPACT}
      {...props}
      _style={extendStyle(MILL_PULVERIZER_IMPACT, props)}
    />
  )
}
