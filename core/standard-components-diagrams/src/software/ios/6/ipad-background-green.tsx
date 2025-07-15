import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IPAD_BACKGROUND_GREEN = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iBgFlat;strokeColor=#18211b;fillColor=#1f2923;',
  _width: 175,
  _height: 280,
}

export function IpadBackgroundGreen(props: DiagramNodeProps) {
  return <Shape {...IPAD_BACKGROUND_GREEN} {...props} />
}
