import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURITY_BASELINES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Security_Baselines.svg;strokeColor=none;',
  _width: 44,
  _height: 50,
}

export function SecurityBaselines(props: DiagramNodeProps) {
  return <Shape {...SECURITY_BASELINES} {...props} />
}
