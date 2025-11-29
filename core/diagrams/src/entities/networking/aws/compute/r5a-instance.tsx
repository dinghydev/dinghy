import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const R5A_INSTANCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.r5a_instance;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function R5aInstance(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, R5A_INSTANCE)} />
}
