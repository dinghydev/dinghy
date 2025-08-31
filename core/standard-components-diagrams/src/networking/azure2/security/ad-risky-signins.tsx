import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AD_RISKY_SIGNINS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Azure_AD_Risky_Signins.svg;strokeColor=none;',
  },
  _width: 67.75999999999999,
  _height: 68,
}

export function AdRiskySignins(props: DiagramNodeProps) {
  return (
    <Shape
      {...AD_RISKY_SIGNINS}
      {...props}
      _style={extendStyle(AD_RISKY_SIGNINS, props)}
    />
  )
}
