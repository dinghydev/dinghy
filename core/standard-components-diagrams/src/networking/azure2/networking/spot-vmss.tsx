import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPOT_VMSS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Spot_VMSS.svg;',
  _width: 68,
  _height: 64,
}

export function SpotVmss(props: DiagramNodeProps) {
  return <Shape {...SPOT_VMSS} {...props} />
}
