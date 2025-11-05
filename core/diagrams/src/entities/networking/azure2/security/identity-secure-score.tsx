import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IDENTITY_SECURE_SCORE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Identity_Secure_Score.svg;strokeColor=none;',
  },
  _original_width: 61.919999999999995,
  _original_height: 68,
}

export function IdentitySecureScore(props: NodeProps) {
  return (
    <Shape
      {...IDENTITY_SECURE_SCORE}
      {...props}
      _style={extendStyle(IDENTITY_SECURE_SCORE, props)}
    />
  )
}
