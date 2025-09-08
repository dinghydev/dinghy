import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PLATFORM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.platform;',
  },
  _original_width: 39,
  _original_height: 60,
}

export function Platform(props: DiagramNodeProps) {
  return (
    <Shape {...PLATFORM} {...props} _style={extendStyle(PLATFORM, props)} />
  )
}
