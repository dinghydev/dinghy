import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UMBRELLA = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.umbrella;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Umbrella(props: DiagramNodeProps) {
  return (
    <Shape {...UMBRELLA} {...props} _style={extendStyle(UMBRELLA, props)} />
  )
}
