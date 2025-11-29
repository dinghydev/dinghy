import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const API_PROXY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/API_Proxy.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 38,
}

export function ApiProxy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, API_PROXY)} />
}
