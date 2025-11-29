import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PAGE_CONTROL = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7ui.pageControl;fillColor=#222222;strokeColor=#aaaaaa;sketch=0;',
  },
  _width: 50,
  _height: 5,
}

export function PageControl(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PAGE_CONTROL)} />
}
