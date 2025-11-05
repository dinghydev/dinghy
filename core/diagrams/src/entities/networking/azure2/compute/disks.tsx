import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISKS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Disks.svg;strokeColor=none;',
  },
  _original_width: 56.99999999999999,
  _original_height: 56.00000000000001,
}

export function Disks(props: NodeProps) {
  return <Shape {...DISKS} {...props} _style={extendStyle(DISKS, props)} />
}
