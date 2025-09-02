import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MODAL_TITLE = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;html=1;strokeColor=#C8C8C8;fillColor=#ffffff;whiteSpace=wrap;verticalAlign=top;align=left;fontSize=18;spacing=15;spacingTop=-5;',
  },
  _original_width: 0,
  _original_height: 200,
}

export function ModalTitle(props: DiagramNodeProps) {
  return (
    <Shape
      {...MODAL_TITLE}
      {...props}
      _style={extendStyle(MODAL_TITLE, props)}
    />
  )
}
