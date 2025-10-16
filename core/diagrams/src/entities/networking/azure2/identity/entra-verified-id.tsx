import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTRA_VERIFIED_ID = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Verified_ID.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60.440000000000005,
}

export function EntraVerifiedId(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_VERIFIED_ID}
      {...props}
      _style={extendStyle(ENTRA_VERIFIED_ID, props)}
    />
  )
}
