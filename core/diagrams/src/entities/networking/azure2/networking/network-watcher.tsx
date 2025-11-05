import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_WATCHER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Network_Watcher.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function NetworkWatcher(props: NodeProps) {
  return (
    <Shape
      {...NETWORK_WATCHER}
      {...props}
      _style={extendStyle(NETWORK_WATCHER, props)}
    />
  )
}
