import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERIFICATION_AS_A_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Verification_As_A_Service.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function VerificationAsAService(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VERIFICATION_AS_A_SERVICE)} />
  )
}
