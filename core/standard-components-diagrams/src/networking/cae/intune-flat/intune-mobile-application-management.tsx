import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTUNE_MOBILE_APPLICATION_MANAGEMENT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.intune_mobile_application_management',
  _width: 49,
  _height: 50,
}

export function IntuneMobileApplicationManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTUNE_MOBILE_APPLICATION_MANAGEMENT}
      {...props}
      _style={extendStyle(INTUNE_MOBILE_APPLICATION_MANAGEMENT, props)}
    />
  )
}
