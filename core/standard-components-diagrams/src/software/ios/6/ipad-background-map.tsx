import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPAD_BACKGROUND_MAP = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iBgMap;strokeColor=#18211b;strokeColor2=#008cff;fillColor2=#96D1FF;',
  _width: 175,
  _height: 280,
}

export function IpadBackgroundMap(props: DiagramNodeProps) {
  return (
    <Shape
      {...IPAD_BACKGROUND_MAP}
      {...props}
      _style={extendStyle(IPAD_BACKGROUND_MAP, props)}
    />
  )
}
