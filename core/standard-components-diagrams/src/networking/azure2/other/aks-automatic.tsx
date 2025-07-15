import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AKS_AUTOMATIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AKS_Automatic.svg;',
  _width: 68,
  _height: 68,
}

export function AksAutomatic(props: DiagramNodeProps) {
  return <Shape {...AKS_AUTOMATIC} {...props} />
}
