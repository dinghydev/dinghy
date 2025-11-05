import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ARROWS_SYSTEM = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.arrows_system',
  },
  _original_width: 100,
  _original_height: 95,
}

export function ArrowsSystem(props: NodeProps) {
  return (
    <Shape
      {...ARROWS_SYSTEM}
      {...props}
      _style={extendStyle(ARROWS_SYSTEM, props)}
    />
  )
}
