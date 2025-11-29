import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BRIEFCASE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.briefcase;',
  },
  _width: 30,
  _height: 20.099999999999998,
}

export function Briefcase(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BRIEFCASE)} />
}
