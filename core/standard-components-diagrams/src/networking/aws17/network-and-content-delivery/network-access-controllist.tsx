import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETWORK_ACCESS_CONTROLLIST = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.network_access_controllist;fillColor=#F58534;gradientColor=none;',
  _width: 69,
  _height: 72,
}

export function NetworkAccessControllist(props: DiagramNodeProps) {
  return <Shape {...NETWORK_ACCESS_CONTROLLIST} {...props} />
}
