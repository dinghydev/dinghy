import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETWORK_WATCHER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Network_Watcher.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
