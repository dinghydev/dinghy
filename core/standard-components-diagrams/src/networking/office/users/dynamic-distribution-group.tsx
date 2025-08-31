import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DYNAMIC_DISTRIBUTION_GROUP = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.dynamic_distribution_group;',
  _width: 58,
  _height: 59,
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
