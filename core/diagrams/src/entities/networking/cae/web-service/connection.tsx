import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONNECTION = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Connection.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 31,
}

export function Connection(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONNECTION)} />
}
