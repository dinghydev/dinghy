import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.service2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Service2(props: DiagramNodeProps) {
  return (
    <Shape {...SERVICE_2} {...props} _style={extendStyle(SERVICE_2, props)} />
  )
}
