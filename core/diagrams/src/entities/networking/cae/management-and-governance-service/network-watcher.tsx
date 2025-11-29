import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NETWORK_WATCHER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Network_watcher.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function NetworkWatcher(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NETWORK_WATCHER)} />
}
