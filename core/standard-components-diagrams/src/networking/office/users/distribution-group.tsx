import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DISTRIBUTION_GROUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.distribution_group;',
  },
  _width: 58,
  _height: 59,
}

export function DistributionGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISTRIBUTION_GROUP}
      {...props}
      _style={extendStyle(DISTRIBUTION_GROUP, props)}
    />
  )
}
