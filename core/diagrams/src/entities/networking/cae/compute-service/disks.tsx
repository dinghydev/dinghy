import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISKS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Discs.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function Disks(props: NodeProps) {
  return <Shape {...DISKS} {...props} _style={extendStyle(DISKS, props)} />
}
