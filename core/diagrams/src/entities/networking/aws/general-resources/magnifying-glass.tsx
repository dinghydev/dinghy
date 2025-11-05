import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAGNIFYING_GLASS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.magnifying_glass_2;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function MagnifyingGlass(props: NodeProps) {
  return (
    <Shape
      {...MAGNIFYING_GLASS}
      {...props}
      _style={extendStyle(MAGNIFYING_GLASS, props)}
    />
  )
}
