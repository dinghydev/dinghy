import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_DATACENTER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Datacenter.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function VirtualDatacenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_DATACENTER}
      {...props}
      _style={extendStyle(VIRTUAL_DATACENTER, props)}
    />
  )
}
