import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PREV_NEXT_BUTTON = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPrevNext;strokeColor=#444444;fillColor=#dddddd;fillColor2=#3D5565;fillColor3=#ffffff;align=center;sketch=0;',
  },
  _original_width: 43.5,
  _original_height: 15,
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
