import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHIELD_ADVANCED = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.shield_shield_advanced;',
  },
  _original_width: 70,
  _original_height: 78,
}

export function ShieldAdvanced(props: DiagramNodeProps) {
  return (
    <Shape
      {...SHIELD_ADVANCED}
      {...props}
      _style={extendStyle(SHIELD_ADVANCED, props)}
    />
  )
}
