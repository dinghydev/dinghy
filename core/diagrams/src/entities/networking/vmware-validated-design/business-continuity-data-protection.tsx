import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_CONTINUITY_DATA_PROTECTION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.business_continuity_data_protection;',
  },
  _original_width: 50,
  _original_height: 43,
}

export function BusinessContinuityDataProtection(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, BUSINESS_CONTINUITY_DATA_PROTECTION)}
    />
  )
}
