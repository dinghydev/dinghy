import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DC_OS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/DC_OS.svg;strokeColor=none;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function DcOs(props: NodeProps) {
  return <Shape {...DC_OS} {...props} _style={extendStyle(DC_OS, props)} />
}
