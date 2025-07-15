import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHANNELS_2 = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.channels2;',
  _width: 60,
  _height: 60,
}

export function Channels2(props: DiagramNodeProps) {
  return <Shape {...CHANNELS_2} {...props} />
}
