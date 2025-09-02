import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FLAME_ARRESTOR_FIRE_RESISTANT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.flame_arrestor_(fire-resistant);',
  },
  _original_width: 100,
  _original_height: 100,
}

export function FlameArrestorFireResistant(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLAME_ARRESTOR_FIRE_RESISTANT}
      {...props}
      _style={extendStyle(FLAME_ARRESTOR_FIRE_RESISTANT, props)}
    />
  )
}
