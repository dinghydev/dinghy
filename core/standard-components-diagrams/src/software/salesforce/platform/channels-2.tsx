import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANNELS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.channels2;',
  },
  _width: 60,
  _height: 60,
}

export function Channels2(props: DiagramNodeProps) {
  return (
    <Shape {...CHANNELS_2} {...props} _style={extendStyle(CHANNELS_2, props)} />
  )
}
