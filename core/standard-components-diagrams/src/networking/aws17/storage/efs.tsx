import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EFS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.efs;fillColor=#E05243;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Efs(props: DiagramNodeProps) {
  return <Shape {...EFS} {...props} _style={extendStyle(EFS, props)} />
}
