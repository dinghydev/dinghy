import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOME_ORANGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.home;fillColor=#DA4026;',
  },
  _original_width: 51,
  _original_height: 50,
}

export function HomeOrange(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOME_ORANGE}
      {...props}
      _style={extendStyle(HOME_ORANGE, props)}
    />
  )
}
