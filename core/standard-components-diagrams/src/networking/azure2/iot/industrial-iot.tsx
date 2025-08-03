import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INDUSTRIAL_IOT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/iot/Industrial_IoT.svg;strokeColor=none;',
  _width: 62.8,
  _height: 68,
}

export function IndustrialIot(props: DiagramNodeProps) {
  return <Shape {...INDUSTRIAL_IOT} {...props} />
}
