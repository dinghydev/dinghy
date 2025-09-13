import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVICE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.service',
  },
  _width: 70,
  _height: 100,
}

export function Service(props: DiagramNodeProps) {
  return <Shape {...SERVICE} {...props} _style={extendStyle(SERVICE, props)} />
}
