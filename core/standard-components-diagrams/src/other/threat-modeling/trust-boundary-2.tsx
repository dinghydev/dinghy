import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TRUST_BOUNDARY_2 = {
  _style: {
    entity:
      'shape=requiredInterface;html=1;verticalLabelPosition=bottom;dashed=1;strokeColor=#FF3333;strokeWidth=2;fillColor=none;fontColor=#FF3333;align=center;verticalAlign=top;labelPosition=center;',
  },
  _original_width: 20,
  _original_height: 330,
}

export function TrustBoundary2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRUST_BOUNDARY_2}
      {...props}
      _style={extendStyle(TRUST_BOUNDARY_2, props)}
    />
  )
}
