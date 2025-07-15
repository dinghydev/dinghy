import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IDENTITY_SECURE_SCORE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Identity_Secure_Score.svg;',
  _width: 61.919999999999995,
  _height: 68,
}

export function IdentitySecureScore(props: DiagramNodeProps) {
  return <Shape {...IDENTITY_SECURE_SCORE} {...props} />
}
