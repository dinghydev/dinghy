import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOSTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Hosts.svg;strokeColor=none;',
  },
  _original_width: 57.199999999999996,
  _original_height: 68,
}

export function Hosts(props: DiagramNodeProps) {
  return <Shape {...HOSTS} {...props} _style={extendStyle(HOSTS, props)} />
}
