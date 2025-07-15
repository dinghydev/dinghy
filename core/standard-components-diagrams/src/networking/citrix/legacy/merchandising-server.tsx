import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MERCHANDISING_SERVER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.merchandising_server;',
  _width: 75,
  _height: 90,
}

export function MerchandisingServer(props: DiagramNodeProps) {
  return <Shape {...MERCHANDISING_SERVER} {...props} />
}
