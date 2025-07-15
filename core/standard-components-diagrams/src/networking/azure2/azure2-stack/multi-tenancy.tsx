import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTI_TENANCY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Multi_Tenancy.svg;',
  _width: 68,
  _height: 65,
}

export function MultiTenancy(props: DiagramNodeProps) {
  return <Shape {...MULTI_TENANCY} {...props} />
}
