import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERIFICATION_AS_A_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Verification_As_A_Service.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
