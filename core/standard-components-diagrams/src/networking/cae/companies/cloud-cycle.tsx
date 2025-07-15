import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_CYCLE = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cloud_Cycle.svg;',
  _width: 50,
  _height: 46,
}

export function CloudCycle(props: DiagramNodeProps) {
  return <Shape {...CLOUD_CYCLE} {...props} />
}
