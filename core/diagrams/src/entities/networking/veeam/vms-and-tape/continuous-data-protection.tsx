import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTINUOUS_DATA_PROTECTION = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.continuous_data_protection;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function ContinuousDataProtection(props: NodeProps) {
  return (
    <Shape
      {...CONTINUOUS_DATA_PROTECTION}
      {...props}
      _style={extendStyle(CONTINUOUS_DATA_PROTECTION, props)}
    />
  )
}
