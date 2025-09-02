import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPRAY_COOLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.spray_cooler;',
  },
  _original_width: 100,
  _original_height: 120,
}

export function SprayCooler(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPRAY_COOLER}
      {...props}
      _style={extendStyle(SPRAY_COOLER, props)}
    />
  )
}
