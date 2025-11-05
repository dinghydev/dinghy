import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTOMATED_TESTING = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.automated_testing;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function AutomatedTesting(props: NodeProps) {
  return (
    <Shape
      {...AUTOMATED_TESTING}
      {...props}
      _style={extendStyle(AUTOMATED_TESTING, props)}
    />
  )
}
