import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_BASELINES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Security_Baselines.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function SecurityBaselines(props: DiagramNodeProps) {
  return <Shape {...SECURITY_BASELINES} {...props} />
}
