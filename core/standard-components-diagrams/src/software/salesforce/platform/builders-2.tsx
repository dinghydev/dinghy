import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUILDERS_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.builders2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Builders2(props: DiagramNodeProps) {
  return (
    <Shape {...BUILDERS_2} {...props} _style={extendStyle(BUILDERS_2, props)} />
  )
}
