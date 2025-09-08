import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_DATACENTER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Virtual_Datacenter.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
