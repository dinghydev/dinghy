import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AMI = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.ami;aspect=fixed;fillColor=#E8CA45;strokeColor=#FFF215;',
  },
  _original_width: 92,
  _original_height: 60,
}

export function Ami(props: DiagramNodeProps) {
  return <Shape {...AMI} {...props} _style={extendStyle(AMI, props)} />
}
