import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AD_RISKY_SIGNINS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Azure_AD_Risky_Signins.svg;',
  _width: 67.75999999999999,
  _height: 68,
}

export function AdRiskySignins(props: DiagramNodeProps) {
  return <Shape {...AD_RISKY_SIGNINS} {...props} />
}
