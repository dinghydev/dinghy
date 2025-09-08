import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERIFICATION_AS_A_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Verification_As_A_Service.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function VerificationAsAService(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERIFICATION_AS_A_SERVICE}
      {...props}
      _style={extendStyle(VERIFICATION_AS_A_SERVICE, props)}
    />
  )
}
