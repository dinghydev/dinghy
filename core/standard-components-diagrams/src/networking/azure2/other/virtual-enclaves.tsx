import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_ENCLAVES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Virtual_Enclaves.svg;',
  _width: 60.440000000000005,
  _height: 68,
}

export function VirtualEnclaves(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_ENCLAVES} {...props} />
}
