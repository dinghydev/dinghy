import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ORIFICE_QUICK_CHANGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.orifice_(quick_change);',
  },
  _width: 10,
  _height: 50,
}

export function OrificeQuickChange(props: NodeProps) {
  return (
    <Shape
      {...ORIFICE_QUICK_CHANGE}
      {...props}
      _style={extendStyle(ORIFICE_QUICK_CHANGE, props)}
    />
  )
}
