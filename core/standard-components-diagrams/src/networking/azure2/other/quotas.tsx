import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const QUOTAS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Quotas.svg;',
  _width: 68,
  _height: 48,
}

export function Quotas(props: DiagramNodeProps) {
  return <Shape {...QUOTAS} {...props} />
}
