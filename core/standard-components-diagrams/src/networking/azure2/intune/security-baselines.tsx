import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_BASELINES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Security_Baselines.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SecurityBaselines(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_BASELINES}
      {...props}
      _style={extendStyle(SECURITY_BASELINES, props)}
    />
  )
}
