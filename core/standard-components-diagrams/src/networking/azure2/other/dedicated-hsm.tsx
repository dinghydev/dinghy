import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEDICATED_HSM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Dedicated_HSM.svg;',
  _width: 68,
  _height: 62,
}

export function DedicatedHsm(props: DiagramNodeProps) {
  return <Shape {...DEDICATED_HSM} {...props} />
}
