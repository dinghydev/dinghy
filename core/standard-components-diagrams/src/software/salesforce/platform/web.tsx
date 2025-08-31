import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.web;',
  },
  _width: 60,
  _height: 47.400000000000006,
}

export function Web(props: DiagramNodeProps) {
  return <Shape {...WEB} {...props} _style={extendStyle(WEB, props)} />
}
