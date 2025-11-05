import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INDUSTRIES = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.industries;',
  },
  _original_width: 53.4,
  _original_height: 60,
}

export function Industries(props: NodeProps) {
  return (
    <Shape {...INDUSTRIES} {...props} _style={extendStyle(INDUSTRIES, props)} />
  )
}
