import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REMOTE_RENDERING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/mixed_reality/Remote_Rendering.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 48,
}

export function RemoteRendering(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REMOTE_RENDERING)} />
}
