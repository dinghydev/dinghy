import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATAVERSE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/Dataverse.svg;',
  _width: 68,
  _height: 52.400000000000006,
}

export function Dataverse(props: DiagramNodeProps) {
  return <Shape {...DATAVERSE} {...props} />
}
