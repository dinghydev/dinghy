import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUPPORT_SKIRT = {
  _style:
    'shape=mxgraph.pid.apparatus_elements.support_skirt;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 60,
  _height: 60,
}

export function SupportSkirt(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUPPORT_SKIRT}
      {...props}
      _style={extendStyle(SUPPORT_SKIRT, props)}
    />
  )
}
