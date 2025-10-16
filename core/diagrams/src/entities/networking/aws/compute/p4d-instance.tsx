import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const P4D_INSTANCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.p4d_instance;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function P4dInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...P4D_INSTANCE}
      {...props}
      _style={extendStyle(P4D_INSTANCE, props)}
    />
  )
}
