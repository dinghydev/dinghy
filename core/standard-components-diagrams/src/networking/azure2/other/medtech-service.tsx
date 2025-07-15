import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDTECH_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/MedTech_Service.svg;',
  _width: 68,
  _height: 60.72,
}

export function MedtechService(props: DiagramNodeProps) {
  return <Shape {...MEDTECH_SERVICE} {...props} />
}
