import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANNELS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.channels;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Channels(props: NodeProps) {
  return (
    <Shape {...CHANNELS} {...props} _style={extendStyle(CHANNELS, props)} />
  )
}
