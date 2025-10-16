import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PREV_NEXT_BUTTON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPrevNext;strokeColor=#444444;fillColor=#dddddd;fillColor2=#3D5565;fillColor3=#ffffff;align=center;sketch=0;',
  },
  _width: 43.5,
  _height: 15,
}

export function PrevNextButton(props: DiagramNodeProps) {
  return (
    <Shape
      {...PREV_NEXT_BUTTON}
      {...props}
      _style={extendStyle(PREV_NEXT_BUTTON, props)}
    />
  )
}
