import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAGNIFYING_GLASS = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.magnifying_glass;pointerEvents=1;',
  },
  _original_width: 55.2,
  _original_height: 54.4,
}

export function MagnifyingGlass(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAGNIFYING_GLASS}
      {...props}
      _style={extendStyle(MAGNIFYING_GLASS, props)}
    />
  )
}
