import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IPHONE_PORTRAIT = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPhone;bgStyle=bgGreen;fillColor=#aaaaaa;sketch=0;',
  _width: 200,
  _height: 400,
}

export function IphonePortrait(props: DiagramNodeProps) {
  return (
    <Shape
      {...IPHONE_PORTRAIT}
      {...props}
      _style={extendStyle(IPHONE_PORTRAIT, props)}
    />
  )
}
