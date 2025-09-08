import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HOME_PAGE_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iHomePageControl;fillColor=#666666;strokeColor=#cccccc;sketch=0;',
  },
  _original_width: 50,
  _original_height: 5,
}

export function HomePageControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOME_PAGE_CONTROL}
      {...props}
      _style={extendStyle(HOME_PAGE_CONTROL, props)}
    />
  )
}
