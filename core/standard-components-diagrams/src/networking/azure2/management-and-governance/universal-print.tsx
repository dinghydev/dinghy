import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNIVERSAL_PRINT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Universal_Print.svg;strokeColor=none;',
  _width: 68,
  _height: 57.99999999999999,
}

export function UniversalPrint(props: DiagramNodeProps) {
  return <Shape {...UNIVERSAL_PRINT} {...props} />
}
