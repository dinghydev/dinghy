import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUD = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.cloud;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _original_width: 24,
  _original_height: 16,
}

export function Cloud(props: DiagramNodeProps) {
  return <Shape {...CLOUD} {...props} _style={extendStyle(CLOUD, props)} />
}
