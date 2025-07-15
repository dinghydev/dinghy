import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INLINE_FORM = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#ffffff;strokeColor=#999999;align=left;spacing=15;fontSize=14;fontColor=#6C767D;',
  _width: 0,
  _height: 30,
}

export function InlineForm(props: DiagramNodeProps) {
  return <Shape {...INLINE_FORM} {...props} />
}
