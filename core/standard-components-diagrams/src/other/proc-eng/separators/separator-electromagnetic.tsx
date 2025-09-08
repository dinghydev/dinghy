import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SEPARATOR_ELECTROMAGNETIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(electromagnetic);',
  },
  _original_width: 80,
  _original_height: 120,
}

export function SeparatorElectromagnetic(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEPARATOR_ELECTROMAGNETIC}
      {...props}
      _style={extendStyle(SEPARATOR_ELECTROMAGNETIC, props)}
    />
  )
}
