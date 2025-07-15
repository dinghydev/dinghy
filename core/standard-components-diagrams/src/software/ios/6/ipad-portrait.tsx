import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IPAD_PORTRAIT = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPad;bgStyle=bgGreen;fillColor=#aaaaaa;sketch=0;',
  _width: 484.99999999999994,
  _height: 625,
}

export function IpadPortrait(props: DiagramNodeProps) {
  return <Shape {...IPAD_PORTRAIT} {...props} />
}
