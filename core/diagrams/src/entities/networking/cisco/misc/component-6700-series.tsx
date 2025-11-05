import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_6700_SERIES = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.6700_series;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function Component6700Series(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_6700_SERIES}
      {...props}
      _style={extendStyle(COMPONENT_6700_SERIES, props)}
    />
  )
}
