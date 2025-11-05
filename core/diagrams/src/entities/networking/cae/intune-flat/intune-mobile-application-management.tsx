import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTUNE_MOBILE_APPLICATION_MANAGEMENT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.intune_mobile_application_management',
  },
  _original_width: 49,
  _original_height: 50,
}

export function IntuneMobileApplicationManagement(props: NodeProps) {
  return (
    <Shape
      {...INTUNE_MOBILE_APPLICATION_MANAGEMENT}
      {...props}
      _style={extendStyle(INTUNE_MOBILE_APPLICATION_MANAGEMENT, props)}
    />
  )
}
