import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HELP_TEXT_3 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#ffffff;strokeColor=#CED4DA;align=left;spacing=15;fontSize=14;fontColor=#6C767D;',
  _width: 1,
  _height: 240,
}

export function HelpText3(props: DiagramNodeProps) {
  return <Shape {...HELP_TEXT_3} {...props} />
}
