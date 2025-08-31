import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CRUSHER_IMPACT = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.crusher_(impact);',
  _width: 100,
  _height: 60,
}

export function CrusherImpact(props: DiagramNodeProps) {
  return (
    <Shape
      {...CRUSHER_IMPACT}
      {...props}
      _style={extendStyle(CRUSHER_IMPACT, props)}
    />
  )
}
