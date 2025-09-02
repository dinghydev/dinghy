import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_GROUPED = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.rrect;rSize=10;fillColor=#F1F2F4;strokeColor=#ffffff;strokeWidth=2',
  },
  _original_width: 320,
  _original_height: 33,
}

export function ButtonGrouped(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_GROUPED}
      {...props}
      _style={extendStyle(BUTTON_GROUPED, props)}
    />
  )
}
