import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_DATACENTER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Datacenter.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function VirtualDatacenter(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_DATACENTER} {...props} />
}
