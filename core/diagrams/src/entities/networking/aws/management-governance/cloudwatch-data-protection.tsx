import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUDWATCH_DATA_PROTECTION = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cloudwatch_data_protection;',
  },
  _original_width: 78,
  _original_height: 69,
}

export function CloudwatchDataProtection(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CLOUDWATCH_DATA_PROTECTION)} />
  )
}
