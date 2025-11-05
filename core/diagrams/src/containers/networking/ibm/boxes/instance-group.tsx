import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSTANCE_GROUP = {
  _style: {
    container:
      'fontStyle=0;verticalAlign=top;align=center;spacingTop=-2;fillColor=none;rounded=0;whiteSpace=wrap;html=1;strokeColor=#00882B;strokeWidth=2;dashed=1;container=1;collapsible=0;expand=0;recursiveResize=0;',
    entity: {
      strokeColor: '#00882B',
    },
  },
}

export function InstanceGroup(props: NodeProps) {
  return (
    <Shape
      {...INSTANCE_GROUP}
      {...props}
      _style={extendStyle(INSTANCE_GROUP, props)}
    />
  )
}
