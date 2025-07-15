import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_WATCHER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Network_watcher.svg;',
  _width: 50,
  _height: 50,
}

export function NetworkWatcher(props: DiagramNodeProps) {
  return <Shape {...NETWORK_WATCHER} {...props} />
}
