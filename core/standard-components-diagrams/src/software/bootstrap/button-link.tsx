import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_LINK = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;strokeWidth=1;fillColor=none;fontColor=#0085FC;whiteSpace=wrap;align=center;verticalAlign=middle;spacingLeft=0;fontStyle=0;fontSize=16;spacing=5;',
  },
  _original_width: 60,
  _original_height: 40,
}

export function ButtonLink(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_LINK}
      {...props}
      _style={extendStyle(BUTTON_LINK, props)}
    />
  )
}
