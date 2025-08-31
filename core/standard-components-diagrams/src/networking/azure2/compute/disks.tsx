import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Disks.svg;strokeColor=none;',
  },
  _width: 56.99999999999999,
  _height: 56.00000000000001,
}

export function Disks(props: DiagramNodeProps) {
  return <Shape {...DISKS} {...props} _style={extendStyle(DISKS, props)} />
}
