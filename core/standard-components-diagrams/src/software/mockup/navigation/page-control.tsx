import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PAGE_CONTROL = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.navigation.pageControl;fillColor=#999999;strokeColor=#ddeeff;',
  _width: 100,
  _height: 30,
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
