import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BANNER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.banner',
  },
  _original_width: 100,
  _original_height: 50,
}

export function Banner(props: DiagramNodeProps) {
  return <Shape {...BANNER} {...props} _style={extendStyle(BANNER, props)} />
}
