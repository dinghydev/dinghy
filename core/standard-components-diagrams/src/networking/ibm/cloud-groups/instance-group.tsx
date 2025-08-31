import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTANCE_GROUP = {
  _style: {
    group:
      'container=1;collapsible=0;expand=0;recursiveResize=0;html=1;whiteSpace=wrap;strokeColor=#198038;fillColor=none;dashed=1;dashPattern=1 3;strokeWidth=2',
    entity: {
      strokeColor: '#198038',
    },
  },
}

export function InstanceGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...INSTANCE_GROUP}
      {...props}
      _style={extendStyle(INSTANCE_GROUP, props)}
    />
  )
}
