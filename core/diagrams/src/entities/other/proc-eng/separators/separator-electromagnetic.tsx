import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEPARATOR_ELECTROMAGNETIC = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(electromagnetic);',
  },
  _width: 80,
  _height: 120,
}

export function SeparatorElectromagnetic(props: NodeProps) {
  return (
    <Shape
      {...SEPARATOR_ELECTROMAGNETIC}
      {...props}
      _style={extendStyle(SEPARATOR_ELECTROMAGNETIC, props)}
    />
  )
}
