import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADMIN = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.connected',
  },
  _width: 100,
  _height: 72,
}

export function Admin(props: DiagramNodeProps) {
  return <Shape {...ADMIN} {...props} _style={extendStyle(ADMIN, props)} />
}
