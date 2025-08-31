import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPAD_BACKGROUND_GRAY = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iBgFlat;strokeColor=#18211b;fillColor=#dddddd;',
  _width: 175,
  _height: 280,
}

export function IpadBackgroundGray(props: DiagramNodeProps) {
  return (
    <Shape
      {...IPAD_BACKGROUND_GRAY}
      {...props}
      _style={extendStyle(IPAD_BACKGROUND_GRAY, props)}
    />
  )
}
