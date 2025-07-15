import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORMATTED_BUTTON = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.buttons.multiButton;fillColor=#008cff;strokeColor=#666666;mainText=;subText=;',
  _width: 0,
  _height: 50,
}

export function FormattedButton(props: DiagramNodeProps) {
  return <Shape {...FORMATTED_BUTTON} {...props} />
}
