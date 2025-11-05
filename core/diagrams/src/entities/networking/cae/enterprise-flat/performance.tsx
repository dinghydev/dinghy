import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PERFORMANCE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.performance',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Performance(props: NodeProps) {
  return (
    <Shape
      {...PERFORMANCE}
      {...props}
      _style={extendStyle(PERFORMANCE, props)}
    />
  )
}
