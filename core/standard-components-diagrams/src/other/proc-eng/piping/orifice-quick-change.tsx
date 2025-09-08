import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ORIFICE_QUICK_CHANGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.orifice_(quick_change);',
  },
  _original_width: 10,
  _original_height: 50,
}

export function OrificeQuickChange(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORIFICE_QUICK_CHANGE}
      {...props}
      _style={extendStyle(ORIFICE_QUICK_CHANGE, props)}
    />
  )
}
