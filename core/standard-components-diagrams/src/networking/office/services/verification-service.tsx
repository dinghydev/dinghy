import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERIFICATION_SERVICE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.verification_service;',
  },
  _original_width: 57,
  _original_height: 59,
}

export function VerificationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERIFICATION_SERVICE}
      {...props}
      _style={extendStyle(VERIFICATION_SERVICE, props)}
    />
  )
}
