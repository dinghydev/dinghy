import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AWS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.aws',
  },
  _original_width: 63.6,
  _original_height: 58.400000000000006,
}

export function Aws(props: DiagramNodeProps) {
  return <Shape {...AWS} {...props} _style={extendStyle(AWS, props)} />
}
