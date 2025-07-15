import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPOT_VM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Spot_VM.svg;',
  _width: 68,
  _height: 62.8,
}

export function SpotVm(props: DiagramNodeProps) {
  return <Shape {...SPOT_VM} {...props} />
}
