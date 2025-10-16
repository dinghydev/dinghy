import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const R6I_INSTANCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ec2_r6i_instance;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function R6iInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...R6I_INSTANCE}
      {...props}
      _style={extendStyle(R6I_INSTANCE, props)}
    />
  )
}
