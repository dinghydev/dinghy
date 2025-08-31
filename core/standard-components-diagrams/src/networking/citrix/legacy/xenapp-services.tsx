import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XENAPP_SERVICES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenapp_services;',
  },
  _width: 76,
  _height: 90,
}

export function XenappServices(props: DiagramNodeProps) {
  return (
    <Shape
      {...XENAPP_SERVICES}
      {...props}
      _style={extendStyle(XENAPP_SERVICES, props)}
    />
  )
}
