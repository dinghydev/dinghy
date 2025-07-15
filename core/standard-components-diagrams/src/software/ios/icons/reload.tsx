import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RELOAD = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.reload;',
  _width: 24,
  _height: 27,
}

export function Reload(props: DiagramNodeProps) {
  return <Shape {...RELOAD} {...props} />
}
