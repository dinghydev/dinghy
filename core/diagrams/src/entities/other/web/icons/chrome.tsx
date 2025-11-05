import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHROME = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.chrome;gradientColor=#DFDEDE',
  },
  _width: 103.2,
  _height: 104,
}

export function Chrome(props: NodeProps) {
  return <Shape {...CHROME} {...props} _style={extendStyle(CHROME, props)} />
}
