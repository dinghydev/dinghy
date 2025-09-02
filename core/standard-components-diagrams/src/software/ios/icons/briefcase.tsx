import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRIEFCASE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.briefcase;',
  },
  _original_width: 30,
  _original_height: 20.099999999999998,
}

export function Briefcase(props: DiagramNodeProps) {
  return (
    <Shape {...BRIEFCASE} {...props} _style={extendStyle(BRIEFCASE, props)} />
  )
}
