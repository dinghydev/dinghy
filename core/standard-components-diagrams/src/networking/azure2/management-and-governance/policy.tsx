import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POLICY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Policy.svg;',
  _width: 60,
  _height: 64,
}

export function Policy(props: DiagramNodeProps) {
  return <Shape {...POLICY} {...props} />
}
