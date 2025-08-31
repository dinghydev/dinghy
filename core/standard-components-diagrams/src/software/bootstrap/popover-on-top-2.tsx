import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POPOVER_ON_TOP_2 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;fillColor=#6C767D;strokeColor=none;perimeter=none;whiteSpace=wrap;resizeWidth=1;align=center;spacing=5;fontColor=#FFFFFF;',
  },
  _width: 1,
  _height: 80,
}

export function PopoverOnTop2(props: DiagramNodeProps) {
  return (
    <Shape
      {...POPOVER_ON_TOP_2}
      {...props}
      _style={extendStyle(POPOVER_ON_TOP_2, props)}
    />
  )
}
