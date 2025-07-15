import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CALENDAR = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.rrect;rSize=5;strokeColor=#999999;fillColor=#ffffff;',
  _width: 160,
  _height: 175,
}

export function Calendar(props: DiagramNodeProps) {
  return <Shape {...CALENDAR} {...props} />
}
