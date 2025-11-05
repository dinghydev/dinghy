import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRUST_BOUNDARY_2 = {
  _style: {
    entity:
      'shape=requiredInterface;html=1;verticalLabelPosition=bottom;dashed=1;strokeColor=#FF3333;strokeWidth=2;fillColor=none;fontColor=#FF3333;align=center;verticalAlign=top;labelPosition=center;',
  },
  _width: 20,
  _height: 330,
}

export function TrustBoundary2(props: NodeProps) {
  return (
    <Shape
      {...TRUST_BOUNDARY_2}
      {...props}
      _style={extendStyle(TRUST_BOUNDARY_2, props)}
    />
  )
}
