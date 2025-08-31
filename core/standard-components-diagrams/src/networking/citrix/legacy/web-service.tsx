import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.web_service;',
  },
  _width: 63,
  _height: 60,
}

export function WebService(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_SERVICE}
      {...props}
      _style={extendStyle(WEB_SERVICE, props)}
    />
  )
}
