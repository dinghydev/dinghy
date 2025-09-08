import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PAGE_CONTROL = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7ui.pageControl;fillColor=#222222;strokeColor=#aaaaaa;sketch=0;',
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
