import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETWORK_WATCHER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Network_watcher.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function NetworkWatcher(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORK_WATCHER}
      {...props}
      _style={extendStyle(NETWORK_WATCHER, props)}
    />
  )
}
