import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENHANCE_UI = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.enhance_ui',
  },
  _original_width: 76,
  _original_height: 100,
}

export function EnhanceUi(props: DiagramNodeProps) {
  return (
    <Shape {...ENHANCE_UI} {...props} _style={extendStyle(ENHANCE_UI, props)} />
  )
}
