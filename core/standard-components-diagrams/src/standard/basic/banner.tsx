import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BANNER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.banner',
  },
  _width: 100,
  _height: 50,
}

export function Banner(props: DiagramNodeProps) {
  return <Shape {...BANNER} {...props} _style={extendStyle(BANNER, props)} />
}
