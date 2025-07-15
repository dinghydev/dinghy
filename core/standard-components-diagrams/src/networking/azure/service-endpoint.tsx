import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_ENDPOINT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.service_endpoint;',
  _width: 50,
  _height: 20,
}

export function ServiceEndpoint(props: DiagramNodeProps) {
  return <Shape {...SERVICE_ENDPOINT} {...props} />
}
