import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOURCEFORGE_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sourceforge_2;fillColor=#00547E;strokeColor=none',
  },
  _original_width: 63.2,
  _original_height: 46.800000000000004,
}

export function Sourceforge2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOURCEFORGE_2}
      {...props}
      _style={extendStyle(SOURCEFORGE_2, props)}
    />
  )
}
