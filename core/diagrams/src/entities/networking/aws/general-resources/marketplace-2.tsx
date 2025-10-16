import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MARKETPLACE_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.marketplace;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function Marketplace2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MARKETPLACE_2}
      {...props}
      _style={extendStyle(MARKETPLACE_2, props)}
    />
  )
}
