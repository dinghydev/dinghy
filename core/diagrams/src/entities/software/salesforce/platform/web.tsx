import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WEB = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.web;',
  },
  _original_width: 60,
  _original_height: 47.400000000000006,
}

export function Web(props: DiagramNodeProps) {
  return <Shape {...WEB} {...props} _style={extendStyle(WEB, props)} />
}
