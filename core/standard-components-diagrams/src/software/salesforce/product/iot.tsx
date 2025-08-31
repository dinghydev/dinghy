import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IOT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.iot;',
  },
  _width: 60,
  _height: 60,
}

export function Iot(props: DiagramNodeProps) {
  return <Shape {...IOT} {...props} _style={extendStyle(IOT, props)} />
}
