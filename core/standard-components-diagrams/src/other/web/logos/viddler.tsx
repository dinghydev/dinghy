import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDDLER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.viddler;fillColor=#1896E0;gradientColor=#06253F',
  },
  _original_width: 82,
  _original_height: 21.200000000000003,
}

export function Viddler(props: DiagramNodeProps) {
  return <Shape {...VIDDLER} {...props} _style={extendStyle(VIDDLER, props)} />
}
