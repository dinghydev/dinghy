import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.web2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Web2(props: DiagramNodeProps) {
  return <Shape {...WEB_2} {...props} _style={extendStyle(WEB_2, props)} />
}
