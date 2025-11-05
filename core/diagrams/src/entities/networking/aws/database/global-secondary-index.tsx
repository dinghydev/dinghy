import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GLOBAL_SECONDARY_INDEX = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.global_secondary_index;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function GlobalSecondaryIndex(props: NodeProps) {
  return (
    <Shape
      {...GLOBAL_SECONDARY_INDEX}
      {...props}
      _style={extendStyle(GLOBAL_SECONDARY_INDEX, props)}
    />
  )
}
