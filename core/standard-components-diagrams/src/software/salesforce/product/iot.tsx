import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IOT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.iot;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Iot(props: DiagramNodeProps) {
  return <Shape {...IOT} {...props} _style={extendStyle(IOT, props)} />
}
