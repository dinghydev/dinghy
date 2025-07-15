import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APPLICATION_STORE = {
  _style:
    'sketch=0;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.databases.application_store;',
  _width: 49,
  _height: 53,
}

export function ApplicationStore(props: DiagramNodeProps) {
  return <Shape {...APPLICATION_STORE} {...props} />
}
