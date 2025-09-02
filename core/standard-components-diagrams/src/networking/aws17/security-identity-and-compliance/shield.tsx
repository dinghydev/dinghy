import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SHIELD = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.shield;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 70.5,
}

export function Shield(props: DiagramNodeProps) {
  return <Shape {...SHIELD} {...props} _style={extendStyle(SHIELD, props)} />
}
