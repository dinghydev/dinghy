import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ENHANCE_UI = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.enhance_ui',
  },
  _width: 76,
  _height: 100,
}

export function EnhanceUi(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ENHANCE_UI)} />
}
