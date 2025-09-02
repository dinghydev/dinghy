import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PAGE_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iPageControl;fillColor=#666666;strokeColor=#cccccc;sketch=0;',
  },
  _original_width: 50,
  _original_height: 5,
}

export function PageControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...PAGE_CONTROL}
      {...props}
      _style={extendStyle(PAGE_CONTROL, props)}
    />
  )
}
