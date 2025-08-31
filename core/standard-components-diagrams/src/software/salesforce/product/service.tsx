import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.service;',
  },
  _width: 60,
  _height: 49.199999999999996,
}

export function Service(props: DiagramNodeProps) {
  return <Shape {...SERVICE} {...props} _style={extendStyle(SERVICE, props)} />
}
