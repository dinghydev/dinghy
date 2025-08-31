import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IDENTITY_SECURE_SCORE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Identity_Secure_Score.svg;strokeColor=none;',
  },
  _width: 61.919999999999995,
  _height: 68,
}

export function IdentitySecureScore(props: DiagramNodeProps) {
  return (
    <Shape
      {...IDENTITY_SECURE_SCORE}
      {...props}
      _style={extendStyle(IDENTITY_SECURE_SCORE, props)}
    />
  )
}
