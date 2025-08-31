import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHANNELS = {
  _style:
    'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.channels;',
  _width: 60,
  _height: 60,
}

export function Channels(props: DiagramNodeProps) {
  return (
    <Shape {...CHANNELS} {...props} _style={extendStyle(CHANNELS, props)} />
  )
}
