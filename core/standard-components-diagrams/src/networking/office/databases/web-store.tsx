import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_STORE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.web_store;',
  _width: 50,
  _height: 54,
}

export function WebStore(props: DiagramNodeProps) {
  return <Shape {...WEB_STORE} {...props} />
}
