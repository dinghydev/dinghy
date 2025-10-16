import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const C6GD_INSTANCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.c6gd;',
  },
  _original_width: 48,
  _original_height: 48,
}

export function C6gdInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...C6GD_INSTANCE}
      {...props}
      _style={extendStyle(C6GD_INSTANCE, props)}
    />
  )
}
