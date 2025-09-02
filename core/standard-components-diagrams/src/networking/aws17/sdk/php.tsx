import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PHP = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.android;fillColor=#5A69A4;gradientColor=none;',
  },
  _original_width: 73.5,
  _original_height: 84,
}

export function Php(props: DiagramNodeProps) {
  return <Shape {...PHP} {...props} _style={extendStyle(PHP, props)} />
}
