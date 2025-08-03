import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_WATCHER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/networking/Network_Watcher.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function NetworkWatcher(props: DiagramNodeProps) {
  return <Shape {...NETWORK_WATCHER} {...props} />
}
