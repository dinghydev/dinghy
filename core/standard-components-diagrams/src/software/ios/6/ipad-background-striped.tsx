import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IPAD_BACKGROUND_STRIPED = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iBgStriped;strokeColor=#18211b;fillColor=#5D7585;strokeColor2=#657E8F;',
  _width: 175,
  _height: 280,
}

export function IpadBackgroundStriped(props: DiagramNodeProps) {
  return <Shape {...IPAD_BACKGROUND_STRIPED} {...props} />
}
