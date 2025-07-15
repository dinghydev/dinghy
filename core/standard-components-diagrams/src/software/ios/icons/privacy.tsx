import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PRIVACY = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.privacy;',
  _width: 16.8,
  _height: 28.5,
}

export function Privacy(props: DiagramNodeProps) {
  return <Shape {...PRIVACY} {...props} />
}
