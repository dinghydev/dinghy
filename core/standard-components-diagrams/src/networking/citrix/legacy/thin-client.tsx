import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THIN_CLIENT = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.thin_client;',
  _width: 71,
  _height: 71,
}

export function ThinClient(props: DiagramNodeProps) {
  return <Shape {...THIN_CLIENT} {...props} />
}
