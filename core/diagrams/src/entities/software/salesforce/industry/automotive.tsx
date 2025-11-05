import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTOMOTIVE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.automotive;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Automotive(props: NodeProps) {
  return (
    <Shape {...AUTOMOTIVE} {...props} _style={extendStyle(AUTOMOTIVE, props)} />
  )
}
