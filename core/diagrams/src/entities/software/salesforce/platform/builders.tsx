import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUILDERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.builders;',
  },
  _original_width: 55.2,
  _original_height: 60,
}

export function Builders(props: NodeProps) {
  return (
    <Shape {...BUILDERS} {...props} _style={extendStyle(BUILDERS, props)} />
  )
}
