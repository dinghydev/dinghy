import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_SERVICE = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.web_service;',
  _width: 63,
  _height: 60,
}

export function WebService(props: DiagramNodeProps) {
  return <Shape {...WEB_SERVICE} {...props} />
}
