import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_WITH_SPINNER = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=none;html=1;whiteSpace=wrap;fillColor=#59AFFD;fontColor=#ffffff;',
  },
  _original_width: 0,
  _original_height: 40,
}

export function ButtonWithSpinner(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_WITH_SPINNER}
      {...props}
      _style={extendStyle(BUTTON_WITH_SPINNER, props)}
    />
  )
}
