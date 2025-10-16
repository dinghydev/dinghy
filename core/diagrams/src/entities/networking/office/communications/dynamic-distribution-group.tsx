import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DYNAMIC_DISTRIBUTION_GROUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.dynamic_distribution_group;',
  },
  _original_width: 58,
  _original_height: 59,
}

export function DynamicDistributionGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...DYNAMIC_DISTRIBUTION_GROUP}
      {...props}
      _style={extendStyle(DYNAMIC_DISTRIBUTION_GROUP, props)}
    />
  )
}
