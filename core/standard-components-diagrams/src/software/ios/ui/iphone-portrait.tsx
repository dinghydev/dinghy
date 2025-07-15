import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IPHONE_PORTRAIT = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7.misc.iphone;strokeColor=#c0c0c0;',
  _width: 200,
  _height: 400,
}

export function IphonePortrait(props: DiagramNodeProps) {
  return <Shape {...IPHONE_PORTRAIT} {...props} />
}
