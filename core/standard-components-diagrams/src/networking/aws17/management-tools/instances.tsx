import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTANCES = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.instances_2;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 81,
  _original_height: 81,
}

export function Instances(props: DiagramNodeProps) {
  return (
    <Shape {...INSTANCES} {...props} _style={extendStyle(INSTANCES, props)} />
  )
}
