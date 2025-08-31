import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORK_WATCHER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Network_Watcher.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
