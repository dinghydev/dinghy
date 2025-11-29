import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Location.svg;strokeColor=none;',
  },
  _width: 40,
  _height: 71,
}

export function Location(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCATION)} />
}
